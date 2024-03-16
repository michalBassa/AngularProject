using Microsoft.AspNetCore.Mvc;
using RecipeApi.classes;

namespace RecipeApi.Controllers
{
    [ApiController]
    [Route("recipe")]

    public class RecipeController : Controller
    {



        public static List<Recipe> recipes = new List<Recipe>()
        {
             new Recipe(1, "IceStrawberry", 2, 2, 8, DateTime.Now, new List<string>() { "Strawberries", "Sugar", "Milk" }, new List<string>() { "Blend ingredients", "Pour into a cup", "Enjoy!" }, 4, "../../../assets/images/recipe-images/22.jpg"),
             new Recipe(2, "IceStrawberry", 2, 2, 8, DateTime.Now, new List<string>() { "Strawberries", "Sugar", "Milk" }, new List<string>() { "Blend ingredients", "Pour into a cup", "Enjoy!" }, 3, "../../../assets/images/recipe-images/3.jpg"),
             new Recipe(3, "IceStrawberry", 2, 2, 8, DateTime.Now, new List<string>() { "Strawberries", "Sugar", "Milk" }, new List<string>() { "Blend ingredients", "Pour into a cup", "Enjoy!" }, 3, "../../../assets/images/recipe-images/4.jpg"),
             new Recipe(4, "IceStrawberry", 2, 2, 8, DateTime.Now, new List<string>() { "Strawberries", "Sugar", "Milk" }, new List<string>() { "Blend ingredients", "Pour into a cup", "Enjoy!" }, 3, "../../../assets/images/recipe-images/5.jpg"),
             new Recipe(5, "IceStrawberry", 2, 2, 8, DateTime.Now, new List<string>() { "Strawberries", "Sugar", "Milk" }, new List<string>() { "Blend ingredients", "Pour into a cup", "Enjoy!" }, 3, "../../../assets/images/recipe-images/6.jpg"),
             new Recipe(6, "IceStrawberry", 2, 2, 8, DateTime.Now, new List<string>() { "Strawberries", "Sugar", "Milk" }, new List<string>() { "Blend ingredients", "Pour into a cup", "Enjoy!" }, 3, "../../../assets/images/recipe-images/7.jpg"),
             new Recipe(7, "IceStrawberry", 2, 2, 8, DateTime.Now, new List<string>() { "Strawberries", "Sugar", "Milk" }, new List<string>() { "Blend ingredients", "Pour into a cup", "Enjoy!" }, 3, "../../../assets/images/recipe-images/8.jpg"),
             new Recipe(8, "IceStrawberry", 2, 2, 8, DateTime.Now, new List<string>() { "Strawberries", "Sugar", "Milk" }, new List<string>() { "Blend ingredients", "Pour into a cup", "Enjoy!" }, 3, "../../../assets/images/recipe-images/9.jpg"),
             new Recipe(9, "IceStrawberry", 2, 2, 8, DateTime.Now, new List<string>() { "Strawberries", "Sugar", "Milk" }, new List<string>() { "Blend ingredients", "Pour into a cup", "Enjoy!" }, 3, "../../../assets/images/recipe-images/10.jpg"),
             new Recipe(10, "IceStrawberry", 2, 2, 8, DateTime.Now, new List<string>() { "Strawberries", "Sugar", "Milk" }, new List<string>() { "Blend ingredients", "Pour into a cup", "Enjoy!" }, 3, "../../../assets/images/recipe-images/12.jpg"),
             new Recipe(12, "IceStrawberry", 2, 2, 8, DateTime.Now, new List<string>() { "Strawberries", "Sugar", "Milk" }, new List<string>() { "Blend ingredients", "Pour into a cup", "Enjoy!" }, 3, "../../../assets/images/recipe-images/13jpg"),
             new Recipe(13, "IceStrawberry", 2, 2, 8, DateTime.Now, new List<string>() { "Strawberries", "Sugar", "Milk" }, new List<string>() { "Blend ingredients", "Pour into a cup", "Enjoy!" }, 3, "../../../assets/images/recipe-images/14.jpg"),
             new Recipe(14, "IceStrawberry", 2, 2, 8, DateTime.Now, new List<string>() { "Strawberries", "Sugar", "Milk" }, new List<string>() { "Blend ingredients", "Pour into a cup", "Enjoy!" }, 3, "../../../assets/images/recipe-images/15.jpg"),
             new Recipe(15, "IceStrawberry", 2, 2, 8, DateTime.Now, new List<string>() { "Strawberries", "Sugar", "Milk" }, new List<string>() { "Blend ingredients", "Pour into a cup", "Enjoy!" }, 3, "../../../assets/images/recipe-images/16.jpg"),
             new Recipe(16, "IceStrawberry", 2, 2, 8, DateTime.Now, new List<string>() { "Strawberries", "Sugar", "Milk" }, new List<string>() { "Blend ingredients", "Pour into a cup", "Enjoy!" }, 3, "../../../assets/images/recipe-images/17.jpg"),
             new Recipe(17, "IceStrawberry", 2, 2, 8, DateTime.Now, new List<string>() { "Strawberries", "Sugar", "Milk" }, new List<string>() { "Blend ingredients", "Pour into a cup", "Enjoy!" }, 3, "../../../assets/images/recipe-images/18.jpg"),
             new Recipe(18, "IceStrawberry", 2, 2, 8, DateTime.Now, new List<string>() { "Strawberries", "Sugar", "Milk" }, new List<string>() { "Blend ingredients", "Pour into a cup", "Enjoy!" }, 3, "../../../assets/images/recipe-images/19.jpg"),
             new Recipe(19, "IceStrawberry", 2, 2, 8, DateTime.Now, new List<string>() { "Strawberries", "Sugar", "Milk" }, new List<string>() { "Blend ingredients", "Pour into a cup", "Enjoy!" }, 3, "../../../assets/images/recipe-images/20.jpg"),
             new Recipe(20, "IceStrawberry", 2, 2, 8, DateTime.Now, new List<string>() { "Strawberries", "Sugar", "Milk" }, new List<string>() { "Blend ingredients", "Pour into a cup", "Enjoy!" }, 3, "../../../assets/images/recipe-images/21.jpg"),
             new Recipe(21, "IceStrawberry", 2, 2, 8, DateTime.Now, new List<string>() { "Strawberries", "Sugar", "Milk" }, new List<string>() { "Blend ingredients", "Pour into a cup", "Enjoy!" }, 3, "../../../assets/images/recipe-images/22.jpg"),
             new Recipe(22, "IceStrawberry", 2, 2, 8, DateTime.Now, new List<string>() { "Strawberries", "Sugar", "Milk" }, new List<string>() { "Blend ingredients", "Pour into a cup", "Enjoy!" }, 3, "../../../assets/images/recipe-images/23.jpg"),
             new Recipe(23, "IceStrawberry", 2, 2, 8, DateTime.Now, new List<string>() { "Strawberries", "Sugar", "Milk" }, new List<string>() { "Blend ingredients", "Pour into a cup", "Enjoy!" }, 3, "../../../assets/images/recipe-images/24.jpg"),
             };
        [HttpGet]
        public IEnumerable<Recipe> Get()
        {
            return recipes;
        }
        [HttpPost]
        [Route("Add_Recipe")]
        public bool Post([FromBody] Recipe recipe)
        {
            if (recipes.Where(x => x.Equals(recipe)).Any())
                return false;
            recipes.Add(recipe);
            return true;
        }

        [HttpGet]
        [Route("id")]
        public Recipe GetById(int id)
        {
            return recipes.Where((r) => r.Id == id).FirstOrDefault();
        }
        [HttpDelete]
        [Route("id")]
        public void DeleteById(int id)
        {
            recipes.Remove(recipes.Where((r) => r.Id == id).FirstOrDefault());
        }
        [HttpPut]
        [Route("id")]
        public void PutById([FromBody] Recipe recipe, int id)
        {
            Recipe updateRecipe = recipes.Where((r) => r.Id == id).FirstOrDefault();
            updateRecipe = recipe;
        }



    }
}