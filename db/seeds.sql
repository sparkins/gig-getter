USE giggetter_db;

INSERT INTO categories (category_name)
VALUES ("House Cleaners"), ("Interior Painters"), ("Exterior Painters"), ("Handymen"), ("Carpet Cleaners"),
("Junk Removal"), ("Massage Theraphy"), ("Plumming"), ("Personal Trainers"), ("Gardening"), ("Electricians"), 
("Pest Control");

INSERT INTO businesses (categoryId, business_name)
VALUES (2, "Pauls Painting Services"), (7, "Megan's Mongolian Messages"), (1, "Ciara's Cleaning Services"), 
(9, "Patricia's Personal Training"), (5, "Craig's Carpet Cleaning"), (10, "Graham's Gardening"), (11, "Erin's Electricity");