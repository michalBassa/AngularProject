using Microsoft.AspNetCore.Mvc;
using RecipeApi.classes;

namespace RecipeApi.Controllers
{
        [ApiController]
        [Route("Category")]
    public class CategoryController : Controller
    {
        
        public static List<Category> categories = new List<Category>()
        {
            new Category(1,"preniumBakery","../../../assets/images/categories/1.jpg"),
            new Category(2,"sweet","../../../assets/images/categories/2.jpg"),
            new Category(3,"ice-cream","../../../assets/images/categories/3.jpg"),
            new Category(4,"classBakery","../../../assets/images/categories/4.jpg"),
        };
        [HttpGet]
        public IEnumerable<Category> Get()
        {
            return categories;
        }
        [HttpGet]
        [Route("id")]
        public Category GetById(int id)
        {
            return categories.Where((r) => r.Id == id).FirstOrDefault();
        }
    }
}
