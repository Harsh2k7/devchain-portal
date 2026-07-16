import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class InnovationDAO {
    private String dbUrl = "jdbc:mysql://localhost:3306/DevChainDB";
    private String dbUser = "root";
    private String dbPassword = "your_password"; // 💡 Apne MySQL ka password yahan daalein

    public boolean saveInnovation(Innovation innovation) {
        String sqlQuery = "INSERT INTO innovations (user_id, title, description, ipfs_hash) VALUES (?, ?, ?, ?)";
        
        try {
            // Load MySQL Driver
            Class.forName("com.mysql.cj.jdbc.Driver");
            
            try (Connection conn = DriverManager.getConnection(dbUrl, dbUser, dbPassword);
                 PreparedStatement pstmt = conn.prepareStatement(sqlQuery)) {
                
                pstmt.setInt(1, innovation.getUserId());
                pstmt.setString(2, innovation.getTitle());
                pstmt.setString(3, innovation.getDescription());
                pstmt.setString(4, innovation.getIpfsHash());
                
                int rowsInserted = pstmt.executeUpdate();
                return rowsInserted > 0;
            }
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
            return false;
        }
    }
}

