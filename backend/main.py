from fastapi import FastAPI
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from routers.term import term_router
from config import MONGODB_URI, DATABASE_NAME


load_dotenv()
print(MONGODB_URI)

app = FastAPI()

origins = [
    "http://0.0.0.0:3000",  # Replace with your frontend's URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {
        "message": "it works"
    }

@app.on_event("startup")
def startup_db_client():
    app.mongodb_client = MongoClient(MONGODB_URI)
    app.database = app.mongodb_client[DATABASE_NAME]
    app.terms = app.database["terms"]
    print(app.database)


app.include_router(term_router, tags=["Term"], prefix="/term")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)