using System;
using System.Data.SqlClient;

public class SQLConnections
{
    private static bool ExecuteCommand(string queryString, bool insert)
    {
        string connectionString = ConnectionInfo._connStr;
        using (SqlConnection connection = new SqlConnection(connectionString))
        {
            SqlCommand command = new SqlCommand(queryString, connection);
            command.Connection.Open();
            if (insert)
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
        return ExecuteCommand(query, true);
    }
}
