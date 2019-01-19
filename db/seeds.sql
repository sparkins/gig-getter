
USE giggetter_db;

INSERT INTO categories (category_name)
VALUES ("House Cleaners"), ("Interior Painters"), ("Exterior Painters"), ("Handymen"), ("Carpet Cleaners"),
("Junk Removal"), ("Massage Theraphy"), ("Plumming"), ("Personal Trainers"), ("Gardening"), ("Electricians"), 
("Pest Control"), ("Flooring");


INSERT INTO businesses (categoryId, business_name, business_bio)
VALUES (2, "Pauls Painting Services", "A new coat of paint can make your place look all brand new."), 
(7, "Megan's Mongolian Massages", "If you've never had a mongolian massage, then you'll be in for a treat."), 
(1, "Ciara's Cleaning Services", "If you want your place to sparkle, then you'll want to give Ciara's Cleaning Service a call!!"), 
(9, "Patricia's Personal Training", "Need to get in shape, or need help keeping up with your new years resolution, that's what I do!!!"), 
(5, "Craig's Carpet Cleaning", "If your carpets are looking dull, or need help getting rid of some tricky stains, give us a call.  Our prices are very competitive."), 
(10, "Graham's Gardening", "Whether you need someone to clean up your yard, weed, plant some new flowers, or install a new sprinkler system."), 
(11, "Erin's Electricity", "Need help rewiring your electrical system, installing new lighting, or other electrical tasks, then give me a call."),
(2, "Ian's Interior Painting", "Gives a call, no painting job is too small."), 
(11, "Sparky's Electricians", "We can rewire anything, and our prices won't be a shock :)."), 
(11, "Electrical Wiring R Us", "We specialize in residential and commercial electrical installation"), 
(1, "Maria's cleaning service", "We pride ourselves in personalizing every cleaning to our clients’ needs."), 
(3, "ABC Painters", "If the outside of your house needs painting, give us a call."), 
(1, "Merlinda's Maid Service", "Our services provide Home Cleaning, Office Cleaning, Move in/Move out Cleaning and Post-event Cleaning."), 
(10, "Green Bay Gardners", "GBG is here to make you dream garden & landscape a reality."),
(4, "Harvey's Handymen", "Something is broke, or you need to build or install a new piece of furniture, I can help."),
(4, "Handy Andy", "I can fix our build anything."),
(6, "JKR Junk Removal", "Spring cleaning, or cleaning out your garage, give us a call and we can take out the trash."),
(6, "Jackie's Junk", "We'll take away any junk no matter what size. ."),
(8, "The Plumbers Crack", "Do you have a crack in your pipe?  We can fix it!!"),
(8, "Peter's Plumbing", "No plumbing job is too small, from fixing a problem to installing a new sink."),
(12, "Patsy's Pests", "Do you have a pest problem?  Rodents, bugs, nextdoor neighbours, we can get rid of them all!!"),
(13, "Freddie's Floors", "Whether you want hardwood or laminate, we've got you covered");


INSERT INTO users (username, email, password_hash, isABusiness) VALUES 
('user1', 'user1@gmail.com', 'pass', false), 
('user2', 'user2@gmail.com', 'pass', false), 
('user3', 'user3@gmail.com', 'pass', false), 
('user4', 'user4@gmail.com', 'pass', false), 
('user5', 'user5@gmail.com', 'pass', false), 
('user6', 'user6@gmail.com', 'pass', false), 
('user7', 'user7@gmail.com', 'pass', false), 
('user8', 'user8@gmail.com', 'pass', false), 
('user9', 'user9@gmail.com', 'pass', false), 
('user10', 'user10@gmail.com', 'pass', false), 
('Simon', 'simoneybags5000@gmail.com', 'pass', false), 
('Alyssa', 'alyssanUp@gmail.com', 'pass', true), 
('Mo', 'MoMoneyMoProblems@yahoo.com', 'pass', false), 
('Manny', 'AllAsForYou@yahoo.com', 'pass', true);


INSERT INTO jobs (userId, businessId, categoryId, rating, review, cost, jobStatus) VALUES
(1,1,2,4,"Awesome paint job, just took a little longer than estimate.",800,3),
(2,1,2,3,"Love the color selections, it just looked a little different one the walls.",975,3),
(3,1,2,4,"Nice job, came , cleaned up and went within a day, very professional and the house looks like new.",900,3),
(4,1,2,4,"Found a more competitive price elsewhere",1250,4),
(5,1,2,NULL,"",0,1),
(6,1,2,NULL,"",0,1),
(7,1,2,NULL,"",850,2),
(8,1,2,NULL,"",1200,2),
(9,1,2,2,"Took longer than expected, wasn't happy with the final colors",1250,3),
(10,1,2,4,"Very happy with the final outcome, would use them again and recommend them.",1000,3),
(1,2,7,5,"Wow wow wow, even my backache has disappeared, great job",100,3),
(2,2,7,5,"Megan is great with her hands, my body feels all brand new",100,3),
(3,2,7,NULL,"",100,2),
(4,2,7,4,"First time and wont be the last, loved it…. Thanks Megan",120,3),
(5,2,7,NULL,"",0,1),
(7,3,1,5,"Came home to a very clean house, thank you Ciara",120,3),
(8,3,1,5,"Ciara even washed and folded my clothes, thank you",115,3),
(9,3,1,5,"Every speck of dust had gone, great job",105,3),
(10,3,1,NULL,"",0,1),
(1,4,9,5,"So glad I decided to hire Patricia, I have lost 30lbs and feel healthier and stronger.",350,3),
(2,4,9,4,"I always leave my sessions with Patricia, exhausted, but knowing that I gave my all.",350,3),
(3,4,9,NULL,"",0,1),
(4,4,9,5,"Patricia is awesome, if you need a trainer look no further",350,3),
(5,4,9,4,"Check out my abs now…..  ",375,3),
(6,4,9,2,"I quit after a week, Patty was just too mean, she scares me :)",375,4),
(7,4,9,NULL,"",375,2),
(8,4,9,NULL,"",375,2),
(9,4,9,4,"Is it summer yet, I can wait to show off my beach body !!!",350,3),
(10,4,9,4,"Great combination of cardio workouts and strength",400,3),
(1,5,5,5,"My carpets look great",85,3),
(2,5,5,5,"Craig was even able to get rid of a very noticable pet stain, thanks Craig",90,3),
(3,5,5,NULL,"Decided to do it myself",75,4),
(4,5,5,4,"Very friendly and speedy work",120,3),
(5,5,5,NULL,"",0,1),
(1,6,10,4,"My garden looks great, awesome choice of colorful flowers.",500,3),
(2,6,10,NULL,"",0,1),
(3,6,10,2,"Declined job, as I have found a more affordable gardener",750,4),
(4,6,10,3,"Did a decent enough job, might try someone else next time. ",800,3),
(5,6,10,4,"Great job, my garden looks great",725,3),
(6,6,10,5,"Awesome job on the planters, my garden looks awesome, thank you, thank you!!!",750,3),
(7,6,10,5,"Great job on the landscaping, I'll be spending much more time outside now!!",1000,3),
(8,6,10,4,"Love the dwarf fruit trees, can't wait for them to start giving us oranges and lemons",1200,4),
(9,6,10,3,"Happy with how our garden turned out",725,2),
(10,6,10,4,"Our garden was a real mess, looks great now after a little TLC!!!",650,2),
(1,7,11,4,"Erin was able to fix our recessed lighting, that hasn't worked for months",120,3),
(2,7,11,3,"Install new outlets, professional job.",165,3),
(3,7,11,4,"Erin wired and installed new ceiling fans in all the bedrooms.  They look great",130,3),
(4,7,11,NULL,"",0,1),
(5,7,11,5,"Erin was able to rewire our living room, so we could move the position of our television",250,3),
(6,8,2,4,"Great paint job",750,3),
(7,8,2,3,"did a decent job painting the exterior of the house",1250,3),
(8,8,2,4,"took care of painting the front door for free",1100,3),
(9,8,2,4,"I love the new color of the house and window treatments",1500,3),
(10,8,2,3,"Ian and his crew were great and completed the work in half a day",1200,3),
(1,9,11,5,"Sparky is the best, my faulty wiring in the basement is now up to code",450,3),
(2,9,11,5,"In and out in under an hour.  I've been trying to fix the thermostat for months",525,3),
(3,9,11,NULL,"",NULL,1),
(4,9,11,3,"Did a bang up job and fixed the TV within a couple of hours",600,3),
(5,9,11,4,"Fine work, master of his trade",750,3),
(6,10,11,4,"rewired our front room, great job",1200,3),
(7,10,11,4,"nice work on the new lighting upstairs",1050,3),
(8,10,11,4,"power has been restored, hallelujah",975,3),
(9,10,11,NULL,"",NULL,4),
(10,10,11,4,"We now have new outlets in the garden, nice work",1100,3),
(1,11,1,4,"Very professional and was able to clean my house within a couple of hours",125,3),
(2,11,1,4,"I love coming home to a clean house, thanks",250,3),
(3,11,1,3,"Very professional cleaning service",200,3),
(4,11,1,NULL,"",180,2),
(5,11,1,4,"very nice lady, very respectful of our belongings",175,3),
(6,12,3,4,"Great job painting the kids rooms, a job ive been dreading",1350,3),
(7,12,3,4,"I love our new room, oh it’s the same old room with a fresh new look, nice job",1200,3),
(8,12,3,NULL,"",895,2),
(9,12,3,5,"ABC have done a teriffic job painting our living room, kitchen and family room",1750,3),
(10,12,3,4,"Took care of painting the whole interior of the house.  Resonable price and friendly painters.",2000,3),
(1,13,1,4,"Merlinda works wonders with a duster and a sponge",325,3),
(2,13,1,4,"My house looks and smells great again, thank you ",165,3),
(3,13,1,5,"Awesome cleaning in under two hours, how does she do it?",200,3),
(4,14,10,5,"Great job on the new fencing",2500,3),
(5,14,10,4,"Did a fine job on the new brickwork path",2000,3),
(6,14,10,3,"Nice job on all the weeding and  the new flowers",1850,3),
(7,15,4,4,"Thanks Harvey for fixing our molding",275,3),
(8,15,4,3,"I love the new closet that Harvey built",450,3),
(9,15,4,5,"Did a great job install new blinds in our bedroom windows",350,3),
(10,16,4,4,"Andy is handy",525,3),
(1,16,4,4,"Andys wife Sandy loves candy",675,3),
(2,16,4,NULL,"",1200,2),
(3,17,6,NULL,"",600,1),
(4,17,6,NULL,"",400,1),
(5,17,6,5,"Clean out my garage in less than an hour, wow…",375,3),
(6,18,6,4,"Spring cleaning is complete, thanks to Jackie and her crew for taking away the junk",425,3),
(7,18,6,4,"not a bad price to remove 2 matresses, a sofa and desk",250,3),
(8,18,6,5,"Jackie came through with her crew and cleaned us out…..  In a good way :)",750,3),
(9,19,8,3,"Yay, my garbage displosal works again",360,3),
(10,19,8,NULL,"",380,2),
(1,19,8,5,"Great job fixing the tap that has been dripping for 2 months….",225,3),
(2,20,8,5,"Peter Piper fixed my pipe with a pickle pepper",450,3),
(3,20,8,5,"Peter is great with the pipes….  Drainage restored",975,3),
(4,20,8,NULL,"",200,2),
(5,21,12,4,"I can sleep well now, knowing that I no longer have a possom in the basement",400,3),
(6,21,12,NULL,"",400,1),
(7,21,12,4,"Traps have been laid, looking forward to having the attic rodent free",375,3),
(8,22,13,5,"Beautiful bamboo flooring in my front room it looks great",3750,3),
(9,22,13,NULL,"",4500,2),
(10,22,13,4,"Great job tiling the kitchen floor, love it…",2200,3);
