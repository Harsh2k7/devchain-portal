public class Innovation {
    private int id;
    private int userId;
    private String title;
    private String description;
    private String ipfsHash;

    // Default Constructor
    public Innovation() {}

    // Main Constructor
    public Innovation(int id, int userId, String title, String description, String ipfsHash) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.description = description;
        this.ipfsHash = ipfsHash;
    }

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public int getUserId() { return userId; }
    public void setUserId(int userId) { this.userId = userId; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getIpfsHash() { return ipfsHash; }
    public void setIpfsHash(String ipfsHash) { this.ipfsHash = ipfsHash; }
}
