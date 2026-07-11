import { NextRequest, NextResponse } from "next/server"

// Pan sou API base URL
const PAN_SOU_API_URL = process.env.PAN_SOU_API_URL || "http://124.220.76.89:8080/api"

/**
 * GET /api/resource?id=:id
 * Fetch resource details from pan sou API
 */
export async function GET(request: NextRequest) {
  try {
    // Get resource ID from query parameters
    const { searchParams } = new URL(request.url)
    const resourceId = searchParams.get("id")
    
    // If no resource ID is provided, return an error
    if (!resourceId) {
      return NextResponse.json(
        { 
          code: 400, 
          message: "Resource ID is required", 
          data: null 
        },
        { status: 400 }
      )
    }
    
    // Search for the specific resource
    const response = await fetch(`${PAN_SOU_API_URL}/search?q=${encodeURIComponent(resourceId)}&page=1&size=1`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
    
    if (!response.ok) {
      throw new Error(`Failed to fetch resource: ${response.status}`)
    }
    
    const data = await response.json()
    
    return NextResponse.json(data)
  } catch (error) {
    console.error("Resource API error:", error)
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

/**
 * POST /api/resource/save
 * Save resource to cloud drive and generate share link
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { resourceUrl, driveType, password } = body
    
    if (!resourceUrl || !driveType) {
      return NextResponse.json(
        { code: 400, message: "Resource URL and drive type are required", data: null },
        { status: 400 }
      )
    }
    
    // This would integrate with cloud drive APIs to save and share resources
    // For now, we'll just return the original URL
    // In a real implementation, you would:
    // 1. Authenticate with the cloud drive service
    // 2. Save the resource to your drive
    // 3. Generate a share link
    // 4. Return the share link to the user
    
    const shareLink = resourceUrl // Placeholder for actual share link generation
    
    return NextResponse.json({
      code: 0,
      message: "success",
      data: {
        shareLink,
        originalUrl: resourceUrl,
        driveType,
        password: password || ""
      }
    })
  } catch (error) {
    console.error("Save resource API error:", error)
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
