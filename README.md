# Genesis
A minimal, divine particle-creation universe in JavaScript

Genesis は、ブラウザ全体をキャンバスに変え、  
マウスの動きから色鮮やかなパーティクルが生まれては消えていく  
“創世記”をテーマにしたミニマルなアートスクリプトです。

---

## Features
- ブラウザ全体を黒い宇宙空間に変換
- マウス移動でパーティクル（Bit）が誕生
- 残像が残るトレイルエフェクト
- ランダムな色相・速度・サイズで生命感を演出
- 自動リサイズ対応
- コンソールに実行メッセージを表示

---

## Code Structure

### 1. Canvas（空間）の創造
```js
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.innerHTML = '';
document.body.appendChild(canvas);
2. Bit（生命）の定義
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
        ctx.beginPath();window.addEventListener('mousemove', (e) => {
    for (let i = 0; i < 5; i++) {
        particles.push(new Bit(e.clientX, e.clientY));
    }
});

        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}
3. Animation
function animate() {
    ctx.fillStyle = 'rgba(0,0,0,0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
        p.update();
        p.draw();
        if (p.size <= 0.1) particles.splice(i, 1);
    });
    requestAnimationFrame(animate);How to Use
このスクリプトを HTML に読み込むだけで動作します。

ページを開くと画面全体がキャンバスに置き換わります。

マウスを動かすとパーティクルが生成されます。
}
4. Interaction
window.addEventListener('mousemove', (e) => {
    for (let i = 0; i < 5; i++) {
        particles.push(new Bit(e.clientX, e.clientY));
    }
});


