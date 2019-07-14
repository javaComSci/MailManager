using System;
using System.Data.SqlClient;

public class SQLConnections
{
    private static bool ExecuteCommand(string queryString, string queryType)
    {
        string connectionString = ConnectionInfo._connStr;
        using (SqlConnection connection = new SqlConnection(connectionString))
        {
            SqlCommand command = new SqlCommand(queryString, connection);
            command.Connection.Open();
            if (queryType.Equals("insert"))
            {
                int res = command.ExecuteNonQuery();
                return res == 1;
            } else 
            {
                command.ExecuteReader();
                return true;
            }

        }
    }

    public static bool CreateSessionId(int sessionId)
    {
        string query = String.Format("INSERT INTO dbo.Sessions (SessionId, SessionInfo)" +
        	"VALUES ({0}, '');", sessionId);
        return ExecuteCommand(query, "insert");
    }

    public static bool CheckSessionId(int sessionIdToCheck)
    {
        string query = String.Format("SELECT * FROM dbo.Sessions WHERE SessionId = {0}", sessionIdToCheck);
        return ExecuteCommand(query, "select");
    }
}
