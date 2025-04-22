export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const data = req.body;

  try {
    const makeRes = await fetch("https://hook.us2.make.com/a6q14sgcche52gqxv9t19gqgik541cll", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await makeRes.text();
    console.log("✅ Reenviado a Make:", result);
    res.status(200).json({ status: "ok", result });
  } catch (err) {
    console.error("❌ Error reenviando a Make:", err);
    res.status(500).json({ error: "Falló el reenvío a Make" });
  }
}