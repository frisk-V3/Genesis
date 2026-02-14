/* Genesis-JS: */
(function genesis() {
    // 1. 空間（Canvas）の創造
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    document.body.style.margin = '0';
    document.body.style.overflow = 'hidden';
    document.body.style.backgroundColor = '#000';
    document.body.innerHTML = ''; // 既存のものを全て消し去る
    document.body.appendChild(canvas);


    let particles = [];
    const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    window.onresize = resize;
    resize();


    // 2. 生命（パーティクル）の定義
    class Bit {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 4 + 1;
            this.spX = (Math.random() - 0.5) * 10;
            this.spY = (Math.random() - 0.5) * 10;
            this.color = `hsla(${Math.random() * 360}, 100%, 50%, 0.8)`;
        }
        update() {
            this.x += this.spX;
            this.y += this.spY;
            if (this.size > 0.1) this.size -= 0.1;
        }
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }


    // 3. 神の息吹（アニメーション）
    function animate() {
        ctx.fillStyle = 'rgba(0,0,0,0.1)'; // 残像を残す
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((p, i) => {
            p.update();
            p.draw();
            if (p.size <= 0.1) particles.splice(i, 1);
        });
        requestAnimationFrame(animate);
    }


    // 4. 奇跡（マウス移動で発生）
    window.addEventListener('mousemove', (e) => {
        for (let i = 0; i < 5; i++) {
            particles.push(new Bit(e.clientX, e.clientY));
        }
    });


    animate();
    console.log("%c Genesis-JS: 神のコードが実行されました ", "color: gold; background: #333; font-size: 20px;");
})();