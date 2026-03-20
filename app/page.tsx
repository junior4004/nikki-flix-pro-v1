<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NIKKIFLIX OFFICIAL</title>
    <style>
        body { background-color: #000; color: #fff; margin: 0; font-family: 'Helvetica', sans-serif; overflow: hidden; }
        .header { height: 60px; background: #000; display: flex; justify-content: space-between; align-items: center; padding: 0 20px; border-bottom: 2px solid #E50914; }
        .logo { color: #E50914; font-size: 24px; font-weight: 900; letter-spacing: -1px; }
        .stats { display: flex; gap: 15px; }
        .stat-box { border: 1px solid #333; padding: 5px 15px; border-radius: 4px; font-size: 13px; font-weight: bold; }
        .nicole-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.95); z-index: 100; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 20px; }
        .nicole-avatar { font-size: 80px; margin-bottom: 10px; }
        .start-btn { background: #E50914; color: #fff; border: none; padding: 15px 40px; font-size: 18px; font-weight: bold; border-radius: 5px; cursor: pointer; margin-top: 20px; }
        .game-area { height: calc(100vh - 60px); width: 100%; }
        iframe { width: 100%; height: 100%; border: none; }
    </style>
</head>
<body>

    <div id="nicole" class="nicole-overlay">
        <div class="nicole-avatar">👩‍💼</div>
        <h1 style="color: #E50914; margin: 0;">WELCOME TO NIKKIFLIX</h1>
        <p style="max-width: 400px; line-height: 1.5; color: #ccc;">
            "I'm Nicole. Watch one ad to unlock your session. Remember: All free Sweeps have a 20x playthrough requirement. Let's play fair."
        </p>
        <button class="start-btn" onclick="startEngine()">START SESSION (WATCH AD)</button>
    </div>

    <div class="header">
        <div class="logo">NIKKIFLIX</div>
        <div class="stats">
            <div style="color: #FFD700;" class="stat-box">GC: 50,000</div>
            <div style="color: #00FA9A;" class="stat-box">SC: 1.00 🔒</div>
        </div>
    </div>

    <div class="game-area">
        <iframe 
            id="slot-machine"
            src="https://demogamesfree.pragmaticplay.net/gs2c/html5Game.do?extGame=1&symbol=vs20sugarrush&gname=Sugar%20Rush&jurisdiction=99&lang=en&cur=USD" 
            allowfullscreen>
        </iframe>
    </div>

    <script>
        function startEngine() {
            var msg = new SpeechSynthesisUtterance("Hi Jerry, I'm Nicole. Watch one ad to play. Remember the twenty x play through. Enjoy Sugar Rush!");
            window.speechSynthesis.speak(msg);
            document.getElementById('nicole').style.display = 'none';
        }
    </script>
</body>
</html>

