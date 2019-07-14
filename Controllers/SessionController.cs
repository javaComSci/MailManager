using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Web;

namespace mail_manager.Controllers
{
    [Route("SessionInfo/[controller]")]
    public class SessionController : Controller
    {
        [HttpPost("[action]")]
        public IActionResult CreateSessionId()
        {
            Random rnd = new Random();
            int newSessionId = rnd.Next(10000000, 99999999);
            bool resStatus = false;
            try
            {
                resStatus = SQLConnections.CreateSessionId(newSessionId);
            }
            catch
            {
                Console.WriteLine("Error creating session id");
            }

            if(resStatus)
            {
                // sucessfully created that session
                return Ok(new SessionId()
                {
                    sessionId = newSessionId,
                });
            }

            // unable to create that session
            return BadRequest();
        }

        [HttpPost("[action]")]
        public IActionResult CheckSessionId([FromBody] SessionId sessionInfo)
        {
            bool resStatus = false;
            try
            {
                resStatus = SQLConnections.CheckSessionId(sessionInfo.sessionId);
            }
            catch
            {
                Console.WriteLine("Error finding session id");
            }

            if (resStatus)
            {
                // sucessfully created that session
                return Ok(sessionInfo);
            }

            // unable to find that session
            return NotFound();
        }

        public class SessionId
        {
            public int sessionId { get; set; }
        }

    }
}