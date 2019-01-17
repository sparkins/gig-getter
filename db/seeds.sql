USE giggetter_db;

INSERT INTO categories (category_name)
VALUES ("House Cleaners"), ("Interior Painters"), ("Exterior Painters"), ("Handymen"), ("Carpet Cleaners"),
("Junk Removal"), ("Massage Theraphy"), ("Plumming"), ("Personal Trainers"), ("Gardening"), ("Electricians"), 
("Pest Control");

INSERT INTO businesses (categoryId, business_name, business_bio)
VALUES (2, "Pauls Painting Services", "A new coat of paint can make your place look all brand new."), 
(7, "Megan's Mongolian Massages", "If you've never had a mongolian massage, then you'll be in for a treat."), 
(1, "Ciara's Cleaning Services", "If you want your place to sparkle, then you'll want to give Ciara's Cleaning Service a call!!"), 
(9, "Patricia's Personal Training", "Need to get in shape, or need help keeping up with your new years resolution, that's what I do!!!"), 
(5, "Craig's Carpet Cleaning", "If your carpets are looking dull, or need help getting rid of some tricky stains, give us a call.  Our prices are very competitive."), 
(10, "Graham's Gardening", "Whether you need someone to clean up your yard, weed, plant some new flowers, or install a new sprinkler system."), 
(11, "Erin's Electricity", "Need help rewiring your electrical system, installing new lighting, or other electrical tasks, then give me a call.");

INSERT INTO users (username, email, password_hash, isABusiness) VALUES ('Simon', 'simoneybags5000@gmail.com', 'pass', true), ('Alyssa', 'alyssanUp@gmail.com', 'pass', true), ('Mo', 'MoMoneyMoProblems@yahoo.com', 'pass', true), ('Manny', 'AllAsForYou@yahoo.com', 'pass', false);

INSERT INTO businesses (categoryId, business_name, business_bio)
VALUES (2, "Pauls Painting Services", 'I will paint your mansion or your doghouse. Im down for anything!'), (7, "Megan's Mongolian Massages", "Let me love you long time"), (1, "Ciara's Cleaning Services", "I will scrub your dirty house till it shines"), 
(9, "Patricia's Personal Training", "Do you even lift??"), (5, "Craig's Carpet Cleaning", "Haven't you always wanted a carpet that says, 'Take your shoes off at the door'?? Now is your chance!"), (10, "Graham's Gardening", "Whatever your gardening needs are, we can accomodate them!"), (11, "Erin's Electricity", "Shockingly Affordable!");

INSERT INTO users (username, email, password_hash, isABusiness) VALUES ('Simon', 'simoneybags5000@gmail.com', 'pass', true), ('Alyssa', 'alyssanUp@gmail.com', 'pass', true), ('Mo', 'MoMoneyMoProblems@yahoo.com', 'pass', true), ('Manny', 'AllAsForYou@yahoo.com', 'pass', false);

INSERT INTO jobs (userId, businessId, categoryId, rating, review, cost, jobStatus) VALUES
(1, 1, 2, 4, "Awesome paint job, just took a little longer than estimate.",800.00,3), 
(1, 1, 2, 3, "Love the color selections, it just looked a little different one the walls.",975.00,3), 
(1, 1, 2, 4, "Nice job, came , cleaned up and went within a day, very professional and the house looks like new.",900.00,3), 
(2, 4, 9, 5, "So glad I decided to hire Patricia, I have lost 30lbs and feel healthier and stronger.",350.00,3), 
(2, 4, 9, 4, "I always leave my sessions with Patricia, exhausted, but knowing that I gave my all.",350.00,3), 
(2, 4, 9, 5, "Waiting for a quote.",00.00,1), 
(3, 6, 10, 4, "My garden looks great, awesome choice of colorful flowers.",500.00,3), 
(3, 6, 10, 4, "Waiting for quote.",00.00,1), 
(3, 6, 10, 2, "Declined job, as I have found a more affordable gardener.",500.00,4);