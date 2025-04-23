// File: route.ts
export async function GET() {
  return Response.json({
    log: [
      "✓ Starting vulnerability scan...",
      "✓ Firewall open",
      "✓ Port 22: SSH active",
      "✓ Port 80: Web server active",
      "✓ No SQLi or XSS detected",
      "✓ Scan complete ✅"
    ]
  });
}
export async function POST() {
  return Response.json({
    log: [
      "✓ Starting vulnerability scan...",
      "✓ Firewall open",
      "✓ Port 22: SSH active",
      "✓ Port 80: Web server active",
      "✓ No SQLi or XSS detected",
      "✓ Scan complete ✅"
    ]
  });
}
