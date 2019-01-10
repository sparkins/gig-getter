USE giggetter_db;

INSERT INTO categories (category_name)
VALUES ("House Cleaners"), ("Interior Painters"), ("Exterior Painters"), ("Handymen"), ("Carpet Cleaners"),
("Junk Removal"), ("Massage Theraphy"), ("Plumming"), ("Personal Trainers"), ("Gardening"), ("Electricians"), 
("Pest Control");

INSERT INTO businesses (business_name, categoryId)
VALUES ("Pauls Painting Services", 2), ("Megan's Mongolian Messages", 9), ("Ciara's Cleaning Services", 1), 
("Patricia's Personal Training"), ("Craig's Carpet Cleaning", 5), ("Graham's Gardening", 10), ("Erin's Electricity",11);