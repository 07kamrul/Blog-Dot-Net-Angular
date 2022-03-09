using System;

namespace dotnetClaimAuthorization.Models.ResponseModel
{
    public class UserResponseModel
    {
        public string FullName{ get; set; }
        public string Email{ get; set; }
        public string UserName{ get; set; }
        public DateTime DateCreated{ get; set; }
        public string Token{ get; set; }
        public UserResponseModel(string fullName, string email, string userName, DateTime dateCreated)
        {
            FullName = fullName;
            Email = email;
            UserName = userName;
            DateCreated = dateCreated;
        }


    }
}
