USE giggetter_db;

INSERT INTO categories (category_name)
VALUES ("House Cleaners"), ("Interior Painters"), ("Exterior Painters"), ("Handymen"), ("Carpet Cleaners"),
("Junk Removal"), ("Massage Theraphy"), ("Plumming"), ("Personal Trainers"), ("Gardening"), ("Electricians"), 
("Pest Control");

INSERT INTO users (username, email, password_hash, isABusiness) VALUES ('Simon', 'simoneybags5000@gmail.com', 'pass', true), ('Alyssa', 'alyssanUp@gmail.com', 'pass', true), ('Mo', 'MoMoneyMoProblems@yahoo.com', 'pass', true), ('Manny', 'AllAsForYou@yahoo.com', 'pass', false);

INSERT INTO businesses (categoryId, business_name, business_bio)
VALUES (2, "Pauls Painting Services", 'I will paint your mansion or your doghouse. Im down for anything!'), (7, "Megan's Mongolian Massages", "Let me love you long time"), (1, "Ciara's Cleaning Services", "I will scrub your dirty house till it shines"), 
(9, "Patricia's Personal Training", "Do you even lift??"), (5, "Craig's Carpet Cleaning", "Haven't you always wanted a carpet that says, 'Take your shoes off at the door'?? Now is your chance!"), (10, "Graham's Gardening", "Whatever your gardening needs are, we can accomodate them!"), (11, "Erin's Electricity", "Shockingly Affordable!");