"""Tạo ảnh cho hero trang chủ (Limo Green, studio sáng) từ ảnh đã tạo bằng Higgsfield (Nano Banana Pro).

Ảnh gốc nằm ở ../anh-chatgpt/limo-green/higgsfield, tạo từ ảnh thật Limo Green làm tham chiếu.
Lệnh đã dùng ghi trong ../anh-chatgpt/lenh-da-dung.md.

- limo-studio.webp     xe góc 3/4 trước, đã cắt bỏ dải đèn trần phía trên, rộng 2000 px
- detail-*.webp        ba ô cận cảnh (đèn trước, mâm, đèn hậu), 900 x 1117 px (4:5)

Chạy:  python scripts/build-hero-assets.py   (cần Pillow)
"""
import pathlib
from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT.parent / "anh-chatgpt" / "limo-green" / "higgsfield"
OUT = ROOT / "public" / "hero"
OUT.mkdir(parents=True, exist_ok=True)

car = Image.open(SRC / "xe-chinh_34-truoc.png").convert("RGB")
W, H = car.size
car = car.crop((0, round(H * 0.2), W, H))  # bỏ phần trần studio có dải đèn tối
car.resize((2000, round(2000 * car.height / car.width)), Image.LANCZOS).save(OUT / "limo-studio.webp", quality=86, method=6)

for src, name in [("chi-tiet_den-truoc.png", "detail-den-truoc"), ("chi-tiet_mam.png", "detail-mam"), ("chi-tiet_den-hau.png", "detail-den-hau")]:
    im = Image.open(SRC / src).convert("RGB")
    im.resize((900, round(900 * im.height / im.width)), Image.LANCZOS).save(OUT / f"{name}.webp", quality=84, method=6)
print("ok")
