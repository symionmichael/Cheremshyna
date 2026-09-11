"""
Centralizovaná konfigurace aplikace.

Všechny citlivé/prostředí-závislé hodnoty (SECRET_KEY, DB URL, povolené
originy pro CORS) se čtou z proměnných prostředí / souboru .env, nikdy
nejsou napevno v kódu.
"""
import os
import secrets
from pathlib import Path

from dotenv import load_dotenv

load_dotenv()

BACKEND_DIR = Path(__file__).resolve().parent
PROJECT_DIR = BACKEND_DIR.parent


def _get_secret_key() -> str:
    key = os.getenv("SECRET_KEY")
    if not key:
        # V produkci MUSÍ být SECRET_KEY nastaven v prostředí.
        # Tady jen vygenerujeme dočasný klíč, aby appka šla spustit lokálně,
        # ale zároveň hlasitě upozorníme, že to není bezpečné pro produkci.
        key = secrets.token_hex(32)
        print(
            "VAROVÁNÍ: SECRET_KEY není nastaven v prostředí. "
            "Používám dočasně vygenerovaný klíč (po restartu appky "
            "přestanou platit všechny vydané tokeny). "
            "Nastav SECRET_KEY v .env pro produkční provoz!"
        )
    return key


SECRET_KEY: str = _get_secret_key()
ALGORITHM: str = os.getenv("ALGORITHM", "HS256")
if ALGORITHM not in {"HS256", "HS384", "HS512"}:
    raise RuntimeError("ALGORITHM musí být jeden z HS256, HS384 nebo HS512.")
ACCESS_TOKEN_EXPIRE_MINUTES: int = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", "60"))

SQLALCHEMY_DATABASE_URL: str = os.getenv(
    "DATABASE_URL", f"sqlite:///{BACKEND_DIR / 'app.db'}"
)

# Origins, ze kterých smí frontend volat API. V .env zadávej jako
# čárkou oddělený seznam, např: ALLOWED_ORIGINS=https://muj-web.cz,https://admin.muj-web.cz
_raw_origins = os.getenv(
    "ALLOWED_ORIGINS",
    "http://localhost:3000,http://localhost:5173,http://localhost:8080,"
    "http://127.0.0.1:3000,http://127.0.0.1:5173,http://127.0.0.1:8080",
)
ALLOWED_ORIGINS: list[str] = [o.strip() for o in _raw_origins.split(",") if o.strip()]

STATIC_DIR: str = os.getenv("STATIC_DIR", str(PROJECT_DIR / "frontend"))
