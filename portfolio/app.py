from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    contact_details = {
        "name": "Sharad Gupta",
        "email": "shardgupta65@gmail.com",
        "phones": ["+91-9617173355", "+91-9827343375"],
        "location": "Jabalpur,Madhaya pradesh, indian",
        "map_url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22676.46911631131!2d79.95330645476072!3d23.188226636406895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981ae5f741802d7%3A0x683fea101780f4b4!2sLalmati%2C%20Jabalpur%2C%20Madhya%20Pradesh%20482002!5e1!3m2!1sen!2sin!4v1733326045293!5m2!1sen!2sin",
    }
    return render_template("home.html", contact=contact_details)

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/contact")
def contact():
    contact_details = {
        "email": "your_email@gmail.com",
        "phones": ["+123 456 7890", "+987 654 3210"],
        "location": "Your City, Country",
    }
    return render_template("contact.html", contact=contact_details)

@app.route("/projects")
def projects():
    return render_template("projects.html")

@app.route("/experience")
def experience():
    return render_template("experience.html")

if __name__ == "__main__":
    app.run(debug=True)
