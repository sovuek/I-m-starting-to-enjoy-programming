// スキルリストの生成
const skills = ["HTML/CSS", "JavaScript", "Python (GCI)", "データサイエンス", "Docker"];
const list = document.getElementById('skill-list');

if (list) {
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        list.appendChild(li);
    });
}

// メッセージ表示の処理
const btn = document.getElementById('msg-btn');
const msg = document.getElementById('lucky-msg');

const phrases = [
    "GCIベーシック、完走するぞ！🔥",
    "プログラミング、めちゃくちゃ楽しい！✨",
    
];

if (btn) {
    btn.addEventListener('click', () => {
        // メッセージをランダムに選択
        const randomIdx = Math.floor(Math.random() * phrases.length);
        const selectedPhrase = phrases[randomIdx];

        msg.textContent = selectedPhrase;
        msg.style.color = "#e67e22";
        msg.style.fontWeight = "bold";
        msg.style.marginTop = "15px";
        
        msg.animate([
            { opacity: 0, transform: 'translateY(10px)' },
            { opacity: 1, transform: 'translateY(0)' }
        ], {
            duration: 400
        });
    });

}
