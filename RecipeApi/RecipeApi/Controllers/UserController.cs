using Microsoft.AspNetCore.Mvc;
using RecipeApi.classes;
using RecipeApi.DTO;

namespace RecipeApi.Controllers
{
    [ApiController]
    [Route("user")]

    public class UserController : Controller
    {
        public static List<User> users = new List<User>()
        {
            new User(1,"Rivka","RR","r@gmail.com","rrr"),
            new User(2,"Chana","CC","c@gmail.com","ccc"),
            new User(3,"Sara","SS","S@gmail.com","sss"),
            new User(4,"Elisheva","ss","s@gmail.com","326676988Elisheva!"),

        };
        [HttpPost]
        [Route("Login")]
        public int Post([FromBody] LoginDTO login)
        {
      
            if (users.Where(x => x.Name == login.Name && x.Password == login.Password).Any())
                return 0;
            if (users.Where(x => x.Name == login.Name).Any()) 
                return 1;
            return 2;
        } 
        [HttpPost]
        [Route("Register")]
        public bool Post([FromBody] User user)
        {
            if (users.Where(x => x.Equals(user)).Any())
                return false;
            users.Add(user);
            return true;
        }
        [HttpGet]
        [Route("id")]
        public User GetById(int id)
        {
            return users.Where((r) => r.Id == id).FirstOrDefault();
        }

    }
}
