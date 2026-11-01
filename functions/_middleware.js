// functions/_middleware.js
// ஒவ்வொரு ரிக்வெஸ்ட்டும் இதன் வழியா போகும்.
// பதில் 404 என்றால் அந்த பாதையை D1 (db404) டேபிளில் பதிவு செய்கிறது.

export async function onRequest(context) {
  const { request, env, next } = context;
  const response = await next();

  const isRead = request.method === "GET" || request.method === "HEAD";

  if (response.status === 404 && isRead && env.DB) {
    const path = new URL(request.url).pathname.slice(0, 200);

    context.waitUntil(
      env.DB.prepare(
        `INSERT INTO misses (path, hits, last_seen)
         VALUES (?, 1, datetime('now'))
         ON CONFLICT(path) DO UPDATE SET
           hits = hits + 1,
           last_seen = datetime('now')`
      )
        .bind(path)
        .run()
        .catch(function () {})
    );
  }

  return response;
}
