from fastapi import APIRouter, Body, Request, status, Query
from fastapi.encoders import jsonable_encoder
from typing import List
# from models import TermModel
# from config import DEFAULT_COLLECTION_NAME

term_router = APIRouter()

@term_router.get("/")
def term_root():
    return {
        "message": "it is term"
    }