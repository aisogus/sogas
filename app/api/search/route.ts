import { NextRequest, NextResponse } from "next/server"

// Pan sou API base URL
const PAN_SOU_API_URL = process.env.PAN_SOU_API_URL || "http://124.220.76.89:8080/api"

// Simple in-memory cache
const cache = new Map()
const CACHE_TTL = parseInt(process.env.CACHE_DURATION || "300") * 1000 // 5 minutes default

/**
 * Search API Route
 * GET /api/search?q=keyword&page=1&size=20&type=all
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const q = searchParams.get("q")
    const page = parseInt(searchParams.get("page") || "1")
    const size = parseInt(searchParams.get("size") || "20")
    const type = searchParams.get("type") || "all"
    
    // Validate input
    if (!q) {
      return NextResponse.json(
        { code: 400, message: "Search query is required", data: null },
        { status: 400 }
      )
    }
    
    // Check cache
    const cacheKey = `${q}_${page}_${size}_${type}`
    const cachedResult = cache.get(cacheKey)
    if (cachedResult && Date.now() - cachedResult.timestamp < CACHE_TTL) {
      return NextResponse.json(cachedResult.data)
    }
    
    // Build query params for pan sou API
    const queryParams = new URLSearchParams({
      q,
      page: page.toString(),
      size: size.toString()
    })
    
    // Make request to pan sou API
    const response = await fetch(`${PAN_SOU_API_URL}/search?${queryParams}`, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      next: { revalidate: 300 } // Next.js cache revalidation
    })
    
    if (!response.ok) {
      throw new Error(`Failed to fetch from pan sou API: ${response.status}`)
    }
    
    const data = await response.json()
    
    // Cache the result
    cache.set(cacheKey, {
      data,
      timestamp: Date.now()
    })
    
    return NextResponse.json(data)
  } catch (error) {
    console.error("Search API error:", error)
    return NextResponse.json(
      { 
        code: 500, 
        message: "Internal server error", 
        data: null,
        error: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    )
  }
}

// Export config for route
export const dynamic = "force-dynamic"
export const runtime = "nodejs"
