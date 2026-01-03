from sqlalchemy.orm import Session
from . import models, schemas

def get_recipe(db: Session, recipe_id: int):
    return db.query(models.Recipe).filter(models.Recipe.id == recipe_id).first()

def get_recipes(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Recipe).offset(skip).limit(limit).all()

def create_recipe(db: Session, recipe: schemas.RecipeCreate):
    db_recipe = models.Recipe(**recipe.dict())
    db.add(db_recipe)
    db.commit()
    db.refresh(db_recipe)
    return db_recipe

def get_ingredients_by_recipe(db: Session, recipe_id: int):
    return db.query(models.Ingredient).filter(models.Ingredient.recipe_id == recipe_id).all()

def create_ingredient(db: Session, ingredient: schemas.IngredientCreate, recipe_id: int):
    db_ingredient = models.Ingredient(**ingredient.dict(), recipe_id=recipe_id)
    db.add(db_ingredient)
    db.commit()
    db.refresh(db_ingredient)
    return db_ingredient
