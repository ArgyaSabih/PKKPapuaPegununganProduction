export function GET() {
  //Redirect to /pokja/sekretariat
  return new Response(null, {
    status: 301,
    headers: {
      Location: "/pokja/sekretariat",
    },
  });
}
