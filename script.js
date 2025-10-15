import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.util.HashMap;

public class DarkAuthApp {
    private static HashMap<String, String> users = new HashMap<>();
    private static boolean isSignup = false;

    public static void main(String[] args) {
        SwingUtilities.invokeLater(DarkAuthApp::createLoginUI);
    }

    private static void createLoginUI() {
        JFrame frame = new JFrame("Freelance Hub - Auth");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 350);
        frame.setLayout(null);
        frame.getContentPane().setBackground(new Color(18, 18, 18));

        JLabel title = new JLabel("Login", SwingConstants.CENTER);
        title.setBounds(100, 20, 200, 30);
        title.setForeground(new Color(0, 255, 204));
        title.setFont(new Font("Segoe UI", Font.BOLD, 22));
        frame.add(title);

        JTextField username = new JTextField();
        username.setBounds(70, 70, 250, 40);
        username.setBackground(new Color(34, 34, 34));
        username.setForeground(Color.WHITE);
        username.setCaretColor(Color.WHITE);
        username.setBorder(BorderFactory.createEmptyBorder(5, 5, 5, 5));
        frame.add(username);

        JPasswordField password = new JPasswordField();
        password.setBounds(70, 120, 250, 40);
        password.setBackground(new Color(34, 34, 34));
        password.setForeground(Color.WHITE);
        password.setCaretColor(Color.WHITE);
        password.setBorder(BorderFactory.createEmptyBorder(5, 5, 5, 5));
        frame.add(password);

        JButton actionBtn = new JButton("Login");
        actionBtn.setBounds(70, 180, 250, 40);
        actionBtn.setBackground(new Color(0, 255, 204));
        actionBtn.setForeground(new Color(18, 18, 18));
        actionBtn.setFont(new Font("Segoe UI", Font.BOLD, 16));
        frame.add(actionBtn);

        JLabel toggleLink = new JLabel("Don't have an account? Sign up", SwingConstants.CENTER);
        toggleLink.setBounds(70, 230, 250, 30);
        toggleLink.setForeground(Color.LIGHT_GRAY);
        frame.add(toggleLink);

        toggleLink.addMouseListener(new MouseAdapter() {
            public void mouseClicked(MouseEvent e) {
                isSignup = !isSignup;
                if (isSignup) {
                    title.setText("Sign Up");
                    actionBtn.setText("Sign Up");
                    toggleLink.setText("Already have an account? Login");
                } else {
                    title.setText("Login");
                    actionBtn.setText("Login");
                    toggleLink.setText("Don't have an account? Sign up");
                }
            }
        });

        actionBtn.addActionListener(e -> {
            String user = username.getText();
            String pass = new String(password.getPassword());

            if (isSignup) {
                if (users.containsKey(user)) {
                    JOptionPane.showMessageDialog(frame, "User already exists!");
                } else {
                    users.put(user, pass);
                    JOptionPane.showMessageDialog(frame, "Signup successful! Please login.");
                    toggleLink.dispatchEvent(new MouseEvent(toggleLink, MouseEvent.MOUSE_CLICKED, 
                                                           System.currentTimeMillis(), 0, 0, 0, 1, false));
                }
            } else {
                if (users.containsKey(user) && users.get(user).equals(pass)) {
                    frame.dispose();
                    createProfileUI(user);
                } else {
                    JOptionPane.showMessageDialog(frame, "Invalid credentials!");
                }
            }
        });

        frame.setLocationRelativeTo(null);
        frame.setVisible(true);
    }

    private static void createProfileUI(String username) {
        JFrame profileFrame = new JFrame("Profile - " + username);
        profileFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        profileFrame.setSize(400, 400);
        profileFrame.setLayout(null);
        profileFrame.getContentPane().setBackground(new Color(18, 18, 18));

        JLabel avatar = new JLabel();
        avatar.setBounds(150, 30, 100, 100);
        avatar.setOpaque(true);
        avatar.setBackground(new Color(0, 255, 204));
        profileFrame.add(avatar);

        JLabel nameLabel = new JLabel("👤 " + username, SwingConstants.CENTER);
        nameLabel.setBounds(50, 150, 300, 30);
        nameLabel.setForeground(Color.WHITE);
        nameLabel.setFont(new Font("Segoe UI", Font.BOLD, 20));
        profileFrame.add(nameLabel);

        JLabel skills = new JLabel("🌟 Skills: Java, Web Dev, UI/UX", SwingConstants.CENTER);
        skills.setBounds(50, 190, 300, 30);
        skills.setForeground(Color.LIGHT_GRAY);
        profileFrame.add(skills);

        JLabel rate = new JLabel("💰 Rate: $25/hr", SwingConstants.CENTER);
        rate.setBounds(50, 220, 300, 30);
        rate.setForeground(Color.LIGHT_GRAY);
        profileFrame.add(rate);

        JButton logoutBtn = new JButton("Logout");
        logoutBtn.setBounds(120, 280, 150, 40);
        logoutBtn.setBackground(new Color(0, 255, 204));
        logoutBtn.setForeground(new Color(18, 18, 18));
        logoutBtn.setFont(new Font("Segoe UI", Font.BOLD, 16));
        profileFrame.add(logoutBtn);

        logoutBtn.addActionListener(e -> {
            profileFrame.dispose();
            createLoginUI();
        });

        profileFrame.setLocationRelativeTo(null);
        profileFrame.setVisible(true);
    }
}
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.util.ArrayList;

public class DarkJobSystem {
    private static java.util.List<String> jobs = new ArrayList<>();
    private static java.util.List<String> bids = new ArrayList<>();
    private static DefaultListModel<String> jobListModel = new DefaultListModel<>();
    private static DefaultListModel<String> bidListModel = new DefaultListModel<>(
import javax.swing.*;
import javax.swing.border.EmptyBorder;
import java.awt.*;
import java.awt.event.*;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class SearchMatchingDarkTheme extends JFrame {
    private JTextField searchField;
    private JTextArea resultsArea;
    private List<String> jobs;

    public SearchMatchingDarkTheme() {
        // Sample Job Data
        jobs = new ArrayList<>();
        jobs.add("Frontend Developer - Skills: React, CSS, JavaScript");
        jobs.add("Backend Developer - Skills: Java, Spring Boot, MySQL");
        jobs.add("Graphic Designer - Skills: Photoshop, Illustrator, Branding");
        jobs.add("Content Writer - Skills: SEO, Blogging, Copywriting");
        jobs.add("Mobile Developer - Skills: Flutter, Kotlin, Firebase");

        // Frame settings
        setTitle("Search & Matching System (Dark Theme)");
        setSize(600, 400);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        // Dark theme colors
        Color bgColor = new Color(18, 18, 18);
        Color cardColor = new Color(30, 30, 30);
        Color accentColor = new Color(0, 173, 181);
        Color textColor = new Color(241, 241, 241);

        // Panel
        JPanel panel = new JPanel();
        panel.setBackground(bgColor);
        panel.setBorder(new EmptyBorder(15, 15, 15, 15));
        panel.setLayout(new BorderLayout(15, 15));

        // Header
        JLabel header = new JLabel("🔍 Job Search & Matching");
        header.setFont(new Font("Arial", Font.BOLD, 20));
        header.setForeground(accentColor);
        header.setHorizontalAlignment(SwingConstants.CENTER);
        panel.add(header, BorderLayout.NORTH);

        // Search bar
        JPanel searchPanel = new JPanel(new BorderLayout());
        searchPanel.setBackground(bgColor);

        searchField = new JTextField();
        searchField.setBackground(cardColor);
        searchField.setForeground(textColor);
        searchField.setCaretColor(accentColor);
        searchField.setFont(new Font("Arial", Font.PLAIN, 16));
        searchField.setBorder(BorderFactory.createCompoundBorder(
                BorderFactory.createLineBorder(accentColor, 2),
                new EmptyBorder(8, 8, 8, 8)
        ));

        JButton searchBtn = new JButton("Search");
        searchBtn.setBackground(accentColor);
        searchBtn.setForeground(bgColor);
        searchBtn.setFont(new Font("Arial", Font.BOLD, 14));
        searchBtn.setFocusPainted(false);

        searchPanel.add(searchField, BorderLayout.CENTER);
        searchPanel.add(searchBtn, BorderLayout.EAST);

        panel.add(searchPanel, BorderLayout.SOUTH);

        // Results area
        resultsArea = new JTextArea();
        resultsArea.setBackground(cardColor);
        resultsArea.setForeground(textColor);
        resultsArea.setFont(new Font("Monospaced", Font.PLAIN, 14));
        resultsArea.setEditable(false);
        resultsArea.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));

        JScrollPane scrollPane = new JScrollPane(resultsArea);
        scrollPane.setBorder(null);
        panel.add(scrollPane, BorderLayout.CENTER);

        // Action Listener for Search
        ActionListener searchAction = e -> {
            String query = searchField.getText().toLowerCase();
            List<String> filtered = jobs.stream()
                    .filter(job -> job.toLowerCase().contains(query))
                    .collect(Collectors.toList());
            showResults(filtered);
        };

        searchBtn.addActionListener(searchAction);
        searchField.addActionListener(searchAction); // press Enter

        // Show default results
        showResults(jobs);

        add(panel);
    }

    private void showResults(List<String> jobList) {
        resultsArea.setText("");
        if (jobList.isEmpty()) {
            resultsArea.append("❌ No matches found.\n");
        } else {
            for (String job : jobList) {
                resultsArea.append("• " + job + "\n\n");
            }
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new SearchMatchingDarkTheme().setVisible(true);
        });
    }
}
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class SecurePaymentDarkTheme extends JFrame {
    private JTextField cardNumberField, nameField, expiryField, cvvField, amountField;
    private JLabel messageLabel;

    public SecurePaymentDarkTheme() {
        setTitle("Secure Payment - Dark Theme");
        setSize(400, 500);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        // Colors
        Color bgColor = new Color(18, 18, 18);
        Color inputColor = new Color(42, 42, 42);
        Color accentColor = new Color(0, 173, 181);
        Color textColor = new Color(241, 241, 241);

        // Panel
        JPanel panel = new JPanel();
        panel.setBackground(bgColor);
        panel.setLayout(new BoxLayout(panel, BoxLayout.Y_AXIS));
        panel.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));

        // Title
        JLabel title = new JLabel("💳 Secure Payment");
        title.setForeground(accentColor);
        title.setFont(new Font("Segoe UI", Font.BOLD, 22));
        title.setAlignmentX(Component.CENTER_ALIGNMENT);
        panel.add(title);
        panel.add(Box.createRigidArea(new Dimension(0, 20)));

        // Card Number
        JLabel cardLabel = new JLabel("Card Number:");
        cardLabel.setForeground(textColor);
        panel.add(cardLabel);
        cardNumberField = new JTextField();
        styleField(cardNumberField, inputColor, textColor);
        panel.add(cardNumberField);

        // Name
        JLabel nameLabel = new JLabel("Card Holder Name:");
        nameLabel.setForeground(textColor);
        panel.add(nameLabel);
        nameField = new JTextField();
        styleField(nameField, inputColor, textColor);
        panel.add(nameField);

        // Expiry & CVV
        JPanel expCvvPanel = new JPanel();
        expCvvPanel.setLayout(new GridLayout(1, 2, 10, 0));
        expCvvPanel.setBackground(bgColor);

        JPanel expPanel = new JPanel();
        expPanel.setLayout(new BoxLayout(expPanel, BoxLayout.Y_AXIS));
        expPanel.setBackground(bgColor);
        JLabel expLabel = new JLabel("Expiry (MM/YY):");
        expLabel.setForeground(textColor);
        expPanel.add(expLabel);
        expiryField = new JTextField();
        styleField(expiryField, inputColor, textColor);
        expPanel.add(expiryField);

        JPanel cvvPanel = new JPanel();
        cvvPanel.setLayout(new BoxLayout(cvvPanel, BoxLayout.Y_AXIS));
        cvvPanel.setBackground(bgColor);
        JLabel cvvLabel = new JLabel("CVV:");
        cvvLabel.setForeground(textColor);
        cvvPanel.add(cvvLabel);
        cvvField = new JTextField();
        styleField(cvvField, inputColor, textColor);
        cvvPanel.add(cvvField);

        expCvvPanel.add(expPanel);
        expCvvPanel.add(cvvPanel);
        panel.add(expCvvPanel);
        panel.add(Box.createRigidArea(new Dimension(0, 15)));

        // Amount
        JLabel amountLabel = new JLabel("Amount ($):");
        amountLabel.setForeground(textColor);
        panel.add(amountLabel);
        amountField = new JTextField();
        styleField(amountField, inputColor, textColor);
        panel.add(amountField);

        // Submit button
        JButton submitBtn = new JButton("Pay Now");
        submitBtn.setBackground(accentColor);
        submitBtn.setForeground(bgColor);
        submitBtn.setFocusPainted(false);
        submitBtn.setFont(new Font("Segoe UI", Font.BOLD, 16));
        submitBtn.setAlignmentX(Component.CENTER_ALIGNMENT);
        panel.add(Box.createRigidArea(new Dimension(0, 20)));
        panel.add(submitBtn);

        // Message label
        messageLabel = new JLabel(" ");
        messageLabel.setForeground(Color.GREEN);
        messageLabel.setAlignmentX(Component.CENTER_ALIGNMENT);
        panel.add(Box.createRigidArea(new Dimension(0, 10)));
        panel.add(messageLabel);

        // Submit action
        submitBtn.addActionListener(e -> processPayment());

        add(panel);
    }

    private void styleField(JTextField field, Color bg, Color fg) {
        field.setBackground(bg);
        field.setForeground(fg);
        field.setCaretColor(fg);
        field.setBorder(BorderFactory.createEmptyBorder(5, 5, 5, 5));
    }

    private void processPayment() {
        String card = cardNumberField.getText().trim();
        String name = nameField.getText().trim();
        String expiry = expiryField.getText().trim();
        String cvv = cvvField.getText().trim();
        String amount = amountField.getText().trim();

        if (card.isEmpty() || name.isEmpty() || expiry.isEmpty() || cvv.isEmpty() || amount.isEmpty()) {
            messageLabel.setText("❌ Please fill all fields!");
            messageLabel.setForeground(Color.RED);
        } else if (card.length() != 16 || !card.matches("\\d+")) {
            messageLabel.setText("❌ Invalid card number!");
            messageLabel.setForeground(Color.RED);
        } else if (cvv.length() != 3 || !cvv.matches("\\d+")) {
            messageLabel.setText("❌ Invalid CVV!");
            messageLabel.setForeground(Color.RED);
        } else {
            messageLabel.setText("✅ Payment of $" + amount + " Successful!");
            messageLabel.setForeground(new Color(0, 173, 181));
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new SecurePaymentDarkTheme().setVisible(true);
        });
    }
}
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class DarkThemeChat extends JFrame {
    private JTextArea chatArea;
    private JTextField inputField;

    public DarkThemeChat() {
        setTitle("Dark Theme Chat");
        setSize(400, 600);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        // Colors
        Color bgColor = new Color(18, 18, 18);
        Color chatBg = new Color(30, 30, 30);
        Color accentColor = new Color(0, 173, 181);
        Color textColor = new Color(241, 241, 241);

        // Main panel
        JPanel mainPanel = new JPanel();
        mainPanel.setBackground(bgColor);
        mainPanel.setLayout(new BorderLayout());

        // Header
        JLabel header = new JLabel("💬 Dark Chat Interface");
        header.setFont(new Font("Segoe UI", Font.BOLD, 20));
        header.setForeground(accentColor);
        header.setHorizontalAlignment(SwingConstants.CENTER);
        header.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));
        mainPanel.add(header, BorderLayout.NORTH);

        // Chat area
        chatArea = new JTextArea();
        chatArea.setEditable(false);
        chatArea.setLineWrap(true);
        chatArea.setWrapStyleWord(true);
        chatArea.setBackground(bgColor);
        chatArea.setForeground(textColor);
        chatArea.setFont(new Font("Segoe UI", Font.PLAIN, 14));

        JScrollPane scrollPane = new JScrollPane(chatArea);
        scrollPane.setBorder(BorderFactory.createEmptyBorder());
        scrollPane.getVerticalScrollBar().setBackground(chatBg);
        mainPanel.add(scrollPane, BorderLayout.CENTER);

        // Input panel
        JPanel inputPanel = new JPanel(new BorderLayout(10, 10));
        inputPanel.setBackground(bgColor);
        inputPanel.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));

        inputField = new JTextField();
        inputField.setBackground(chatBg);
        inputField.setForeground(textColor);
        inputField.setCaretColor(accentColor);
        inputField.setFont(new Font("Segoe UI", Font.PLAIN, 14));
        inputPanel.add(inputField, BorderLayout.CENTER);

        JButton sendBtn = new JButton("Send");
        sendBtn.setBackground(accentColor);
        sendBtn.setForeground(bgColor);
        sendBtn.setFont(new Font("Segoe UI", Font.BOLD, 14));
        sendBtn.setFocusPainted(false);
        inputPanel.add(sendBtn, BorderLayout.EAST);

        mainPanel.add(inputPanel, BorderLayout.SOUTH);

        // Action for sending messages
        ActionListener sendMessage = e -> {
            String message = inputField.getText().trim();
            if (!message.isEmpty()) {
                appendMessage("You", message);
                inputField.setText("");
                
                // Simulate a response
                appendMessage("Bot", "Echo: " + message);
            }
        };

        sendBtn.addActionListener(sendMessage);
        inputField.addActionListener(sendMessage); // Enter key

        add(mainPanel);
    }

    private void appendMessage(String sender, String message) {
        chatArea.append(sender + ": " + message + "\n\n");
        chatArea.setCaretPosition(chatArea.getDocument().getLength());
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new DarkThemeChat().setVisible(true);
        });
    }
}import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.util.ArrayList;

public class DarkThemeReviewSystem extends JFrame {
    private JPanel reviewListPanel;
    private JTextArea reviewText;
    private int selectedRating = 0;
    private ArrayList<JLabel> stars = new ArrayList<>();

    public DarkThemeReviewSystem() {
        setTitle("Dark Theme Review & Rating");
        setSize(400, 600);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        Color bgColor = new Color(18, 18, 18);
        Color panelColor = new Color(30, 30, 30);
        Color accentColor = new Color(0, 173, 181);
        Color textColor = new Color(241, 241, 241);

        getContentPane().setBackground(bgColor);
        setLayout(new BorderLayout());

        // Header
        JLabel header = new JLabel("⭐ Rate & Review");
        header.setForeground(accentColor);
        header.setFont(new Font("Segoe UI", Font.BOLD, 20));
        header.setHorizontalAlignment(SwingConstants.CENTER);
        header.setBorder(BorderFactory.createEmptyBorder(15, 0, 15, 0));
        add(header, BorderLayout.NORTH);

        // Center panel
        JPanel centerPanel = new JPanel();
        centerPanel.setBackground(bgColor);
        centerPanel.setLayout(new BorderLayout(0, 10));
        centerPanel.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));
        add(centerPanel, BorderLayout.CENTER);

        // Star panel
        JPanel starPanel = new JPanel();
        starPanel.setBackground(bgColor);
        starPanel.setLayout(new FlowLayout(FlowLayout.CENTER, 5, 0));
        for (int i = 1; i <= 5; i++) {
            JLabel star = new JLabel("\u2605"); // Unicode star
            star.setForeground(new Color(85, 85, 85));
            star.setFont(new Font("Segoe UI", Font.BOLD, 30));
            int value = i;
            star.addMouseListener(new MouseAdapter() {
                @Override
                public void mouseClicked(MouseEvent e) {
                    selectedRating = value;
                    updateStars();
                }
                @Override
                public void mouseEntered(MouseEvent e) {
                    highlightStars(value);
                }
                @Override
                public void mouseExited(MouseEvent e) {
                    updateStars();
                }
            });
            stars.add(star);
            starPanel.add(star);
        }
        centerPanel.add(starPanel, BorderLayout.NORTH);

        // Review text area
        reviewText = new JTextArea(4, 20);
        reviewText.setBackground(panelColor);
        reviewText.setForeground(textColor);
        reviewText.setCaretColor(accentColor);
        reviewText.setLineWrap(true);
        reviewText.setWrapStyleWord(true);
        reviewText.setFont(new Font("Segoe UI", Font.PLAIN, 14));
        JScrollPane scrollPane = new JScrollPane(reviewText);
        scrollPane.setBorder(BorderFactory.createEmptyBorder());
        centerPanel.add(scrollPane, BorderLayout.CENTER);

        // Submit button
        JButton submitBtn = new JButton("Submit");
        submitBtn.setBackground(accentColor);
        submitBtn.setForeground(bgColor);
        submitBtn.setFocusPainted(false);
        submitBtn.setFont(new Font("Segoe UI", Font.BOLD, 16));
        submitBtn.addActionListener(e -> submitReview());
        centerPanel.add(submitBtn, BorderLayout.SOUTH);

        // Reviews display panel
        reviewListPanel = new JPanel();
        reviewListPanel.setBackground(bgColor);
        reviewListPanel.setLayout(new BoxLayout(reviewListPanel, BoxLayout.Y_AXIS));
        JScrollPane reviewScroll = new JScrollPane(reviewListPanel);
        reviewScroll.setBorder(BorderFactory.createEmptyBorder());
        reviewScroll.setPreferredSize(new Dimension(400, 200));
        add(reviewScroll, BorderLayout.SOUTH);
    }

    private void highlightStars(int hoverRating) {
        for (int i = 0; i < stars.size(); i++) {
            if (i < hoverRating) {
                stars.get(i).setForeground(new Color(0, 173, 181));
            } else {
                stars.get(i).setForeground(new Color(85, 85, 85));
            }
        }
    }

    private void updateStars() {
        highlightStars(selectedRating);
    }

    private void submitReview() {
        String text = reviewText.getText().trim();
        if (selectedRating == 0 || text.isEmpty()) return;

        JPanel reviewItem = new JPanel();
        reviewItem.setBackground(new Color(42, 42, 42));
        reviewItem.setLayout(new BorderLayout());
        reviewItem.setBorder(BorderFactory.createEmptyBorder(5,5,5,5));

        JLabel starLabel = new JLabel("\u2605".repeat(selectedRating));
        starLabel.setForeground(new Color(0, 173, 181));
        reviewItem.add(starLabel, BorderLayout.NORTH);

        JTextArea reviewContent = new JTextArea(text);
        reviewContent.setBackground(new Color(42, 42, 42));
        reviewContent.setForeground(new Color(241, 241, 241));
        reviewContent.setLineWrap(true);
        reviewContent.setWrapStyleWord(true);
        reviewContent.setEditable(false);
        reviewContent.setFont(new Font("Segoe UI", Font.PLAIN, 14));
        reviewItem.add(reviewContent, BorderLayout.CENTER);

        reviewListPanel.add(reviewItem);
        reviewListPanel.revalidate();

        // Reset
        reviewText.setText("");
        selectedRating = 0;
        updateStars();
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            DarkThemeReviewSystem frame = new DarkThemeReviewSystem();
            frame.setVisible(true);
        });
    }
}

import javax.swing.*;
import java.awt.*;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;

public class DarkThemeAITools extends JFrame {

    public DarkThemeAITools() {
        setTitle("Dark Theme AI Tools Dashboard");
        setSize(600, 400);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        Color bgColor = new Color(18, 18, 18);
        Color cardColor = new Color(30, 30, 30);
        Color accentColor = new Color(0, 173, 181);
        Color hoverColor = new Color(6, 214, 160);
        Color textColor = new Color(241, 241, 241);

        getContentPane().setBackground(bgColor);
        setLayout(new BorderLayout());

        // Header
        JLabel header = new JLabel("AI Tools Dashboard");
        header.setForeground(accentColor);
        header.setFont(new Font("Segoe UI", Font.BOLD, 24));
        header.setHorizontalAlignment(SwingConstants.CENTER);
        header.setBorder(BorderFactory.createEmptyBorder(15, 0, 15, 0));
        add(header, BorderLayout.NORTH);

        // Tools Panel
        JPanel toolsPanel = new JPanel();
        toolsPanel.setBackground(bgColor);
        toolsPanel.setLayout(new GridLayout(2, 3, 20, 20));
        toolsPanel.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));
        add(toolsPanel, BorderLayout.CENTER);

        String[] toolNames = {"Text Generator", "Image Generator", "Code Assistant",
                              "Chat Bot", "Data Analyzer", "Speech Synthesizer"};

        for (String tool : toolNames) {
            JPanel card = new JPanel();
            card.setBackground(cardColor);
            card.setLayout(new BorderLayout());
            card.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));

            JLabel toolLabel = new JLabel(tool, SwingConstants.CENTER);
            toolLabel.setForeground(textColor);
            toolLabel.setFont(new Font("Segoe UI", Font.BOLD, 16));

            JButton openBtn = new JButton("Open");
            openBtn.setBackground(accentColor);
            openBtn.setForeground(bgColor);
            openBtn.setFocusPainted(false);
            openBtn.setFont(new Font("Segoe UI", Font.BOLD, 14));

            // Hover effect
            openBtn.addMouseListener(new MouseAdapter() {
                @Override
                public void mouseEntered(MouseEvent e) {
                    openBtn.setBackground(hoverColor);
                }

                @Override
                public void mouseExited(MouseEvent e) {
                    openBtn.setBackground(accentColor);
                }
            });

            card.add(toolLabel, BorderLayout.CENTER);
            card.add(openBtn, BorderLayout.SOUTH);

            toolsPanel.add(card);
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            DarkThemeAITools frame = new DarkThemeAITools();
            frame.setVisible(true);
        });
    }
}
import javax.swing.*;
import java.awt.*;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;

public class DarkThemeMobileAppIntegration extends JFrame {

    public DarkThemeMobileAppIntegration() {
        setTitle("Mobile App Integration");
        setSize(600, 400);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        Color bgColor = new Color(18, 18, 18);
        Color cardColor = new Color(30, 30, 30);
        Color accentColor = new Color(0, 173, 181);
        Color hoverColor = new Color(6, 214, 160);
        Color textColor = new Color(241, 241, 241);

        getContentPane().setBackground(bgColor);
        setLayout(new BorderLayout());

        // Header
        JLabel header = new JLabel("📱 Mobile App Integration");
        header.setForeground(accentColor);
        header.setFont(new Font("Segoe UI", Font.BOLD, 24));
        header.setHorizontalAlignment(SwingConstants.CENTER);
        header.setBorder(BorderFactory.createEmptyBorder(15, 0, 15, 0));
        add(header, BorderLayout.NORTH);

        // Apps Panel
        JPanel appsPanel = new JPanel();
        appsPanel.setBackground(bgColor);
        appsPanel.setLayout(new GridLayout(1, 3, 20, 20));
        appsPanel.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));
        add(appsPanel, BorderLayout.CENTER);

        String[] appNames = {"iOS App", "Android App", "Scan QR"};

        for (String app : appNames) {
            JPanel card = new JPanel();
            card.setBackground(cardColor);
            card.setLayout(new BorderLayout());
            card.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));

            JLabel appLabel = new JLabel(app, SwingConstants.CENTER);
            appLabel.setForeground(textColor);
            appLabel.setFont(new Font("Segoe UI", Font.BOLD, 16));

            JButton actionBtn = new JButton("Open");
            actionBtn.setBackground(accentColor);
            actionBtn.setForeground(bgColor);
            actionBtn.setFocusPainted(false);
            actionBtn.setFont(new Font("Segoe UI", Font.BOLD, 14));

            // Hover effect
            actionBtn.addMouseListener(new MouseAdapter() {
                @Override
                public void mouseEntered(MouseEvent e) {
                    actionBtn.setBackground(hoverColor);
                }

                @Override
                public void mouseExited(MouseEvent e) {
                    actionBtn.setBackground(accentColor);
                }
            });

            card.add(appLabel, BorderLayout.CENTER);
            card.add(actionBtn, BorderLayout.SOUTH);

            appsPanel.add(card);
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            DarkThemeMobileAppIntegration frame = new DarkThemeMobileAppIntegration();
            frame.setVisible(true);
        });
    }
}
import javax.swing.*;
import java.awt.*;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;

public class DarkThemeLangCurrency extends JFrame {

    public DarkThemeLangCurrency() {
        setTitle("🌐 Multi-Language & Multi-Currency");
        setSize(500, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        // Colors
        Color bgColor = new Color(18, 18, 18);
        Color cardColor = new Color(30, 30, 30);
        Color accentColor = new Color(0, 173, 181);
        Color hoverColor = new Color(6, 214, 160);
        Color textColor = new
import javax.swing.*;
import java.awt.*;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;

public class DarkThemeAnalyticsDashboard extends JFrame {

    public DarkThemeAnalyticsDashboard() {
        setTitle("📊 Analytics Dashboard");
        setSize(9
