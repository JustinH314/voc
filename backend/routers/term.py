from fastapi import APIRouter, Body, Request, status, Query
from fastapi.encoders import jsonable_encoder
from typing import List
from models import TermModel
from config import DEFAULT_COLLECTION_NAME

term_router = APIRouter()

@term_router.get("/")
def term_root():
    return {
        "message": "it is term"
    }

@term_router.get("/get-all-terms", response_model=List[TermModel])
def get_all_terms(request: Request):
    terms = request.app.terms.find()
    return terms

@term_router.post("/add-new-term")
def add_new_term(request: Request, term: TermModel=Body()):
    term = jsonable_encoder(term)
    request.app.terms.insert_one(term)

@term_router.get("/get-terms-by-part-of-speech/{part_of_speech}", response_model=List[TermModel])
def get_terms_by_part_of_speech(request: Request, part_of_speech):
    filtered_terms = request.app.terms.find({
        "part_of_speech": part_of_speech
    })
    return filtered_terms
