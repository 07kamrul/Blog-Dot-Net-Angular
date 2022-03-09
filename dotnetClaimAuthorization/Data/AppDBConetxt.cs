using dotnetClaimAuthorization.Data.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace dotnetClaimAuthorization.Data
{
    public class AppDBConetxt : IdentityDbContext<AppUser,IdentityRole,string>
    {
        public AppDBConetxt(DbContextOptions options):base(options)
        {
            
        }
    }
}