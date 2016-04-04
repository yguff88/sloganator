var party;
var name;
var randomrepublicanNoun;
var randomrepublicanAdjective;
var randomrepublicanVerb;
var randomdemocratNoun;
var randomdemocratAdjective;
var randomdemocratVerb;

var democratNouns = ['America', 'Leader', 'Leadership', 'Prosperity', 'Future', 'Hope', 'Tomorrow', 'Equality', 'Hope', 'Experience', 'Change', 'Tomorrow', 'Future', 'Smartness', 'Education', 'Revolution', 'Peace', 'Politics', 'Atheism', 'Godlessness', 'ISIS', 'Terrorism', 'Obama', 'Clinton', 'Russia', 'Iran', 'Readiness', 'Scholar', 'Fraud', 'Abuse', 'Disgrace', 'Catastrophe', 'Inversion', 'Surplus', 'Formula', 'Architect', 'Welfare', 'Socialism', 'Immigration'];
var democratAdjectives = ['American', 'Smart', 'Educated', 'Intelligent', 'Moderate', 'Amazing', 'Incredible', 'Hopeful', 'Real', 'New', 'Experienced', 'Sudden', 'Nasty', 'Nice', 'Eminent'];
var democratVerbs = ['Believe ', 'Make', 'Reignite', 'Hope', 'Tell', 'Come', 'Strive', 'Earn', 'Try', 'Share', 'Surrender', 'Pacify', 'Equalize'];
var republicanNouns = ['America', 'Leader', 'Leadership', 'Experience', 'Change', 'Reform', 'Winner', 'Peace', 'Experience', 'Protection', 'Security', 'War', 'Today', 'Consistency', 'Moderation', 'Money', 'Religion', 'God', 'Revolution', 'Peace', 'Politics', 'Outsider', 'Health', 'Anger', 'Fear', 'Ingenuity', 'ISIS', 'ABORTION', 'Terrorism', 'Bible', 'Bush', 'Obama', 'Loser', 'Liar', 'Muslims', '9/11', 'Businessman', 'Disgrace', 'Catastrophe', 'Patriot'];
var republicanAdjectives = ['American', 'Great', 'Amazing', 'Incredible', 'Moderate', 'Hopeful', 'Real', 'New', 'Angry', 'Scared', 'Deviant', 'Fantastic', 'Strong', 'Unbelievable', 'Tremendous', 'Nasty', 'Incumbent', 'Clandestine', 'Imperialist'];
var republicanVerbs = ['Believe ', 'Make', 'Reignite', 'Hope', 'Tell', 'Come', 'Strive', 'Earn', 'Try', 'Do', 'Attach', 'Declare', 'Separate', 'Persecute'];
var republicanChoices = [randomrepublicanVerb + ". " + randomrepublicanVerb + ". " + randomrepublicanVerb + ".", randomrepublicanAdjective + randomrepublicanNoun + ". " + randomrepublicanAdjective + randomrepublicanNoun + ".", "Reigniting the " + randomrepublicanNoun + " of America.", "An " + randomrepublicanAdjective + " " + randomrepublicanAdjective + " " + randomrepublicanNoun + ".", "From " + randomrepublicanNoun + " to " + randomrepublicanNoun + ".", "Believe in " + name + ".", name + " For Us.", "A " + randomrepublicanAdjective + " " + randomrepublicanNoun + " is coming.", name + " for " + randomrepublicanNoun + ".", randomrepublicanVerb + " " + randomrepublicanNoun + " " + randomrepublicanAdjective + " again.", randomrepublicanVerb + " America now.", "The people's " + randomrepublicanNoun + ".", randomrepublicanNoun + " matters.", randomrepublicanVerb + " our " + randomrepublicanNoun + ".", "Obama is " + randomrepublicanAdjective + ".", randomrepublicanNoun + ". " + randomrepublicanNoun + ". " + randomrepublicanNoun + ".", "A " + randomrepublicanAdjective + " " + randomrepublicanNoun + " for America."];
var democratChoices = [randomdemocratVerb + ". " + randomdemocratVerb + ". " + randomdemocratVerb + ".", randomdemocratAdjective + randomdemocratNoun + ". " + randomdemocratAdjective + randomdemocratNoun + ".", "Reigniting the " + randomdemocratNoun + " of America.", "An " + randomdemocratAdjective + " " + randomdemocratAdjective + " " + randomdemocratNoun + ".", "From " + randomdemocratNoun + " to " + randomdemocratNoun + ".", "Believe in " + name + ".", name + " For Us.", "A " + randomdemocratAdjective + " " + randomdemocratNoun + " is coming.", name + " for " + randomdemocratNoun + ".", randomdemocratVerb + " " + randomdemocratNoun + " " + randomdemocratAdjective + " again.", randomdemocratVerb + " America now.", "The people's " + randomdemocratNoun + ".", randomdemocratNoun + " matters.", randomdemocratVerb + " our " + randomdemocratNoun + ".", "Obama is " + randomdemocratAdjective + ".", randomdemocratNoun + ". " + randomdemocratNoun + ". " + randomdemocratNoun + ".", "A " + randomdemocratAdjective + " " + randomdemocratNoun + " for America."];


$('button').on('click',function(){
	if ($(this).hasClass('democrat')){
		$(this).css('color','white');
		$(this).css('background-color','#093E80');
		$(this).css('border-color','#093E80');
		$('.republican').css('color','white');
		$('.republican').css('background-color','white');
		$('.republican').css('border-color','white');
		$(this).animate({left: '1000px'},750);
		$('.republican').animate({left: '1000px'},750,function(){
			$('.yourName').animate({bottom: '100px'},750);
			$('.yourName h2').css('color','#333333');
			$('#name').css('border-color','#333333');
			$('#submit').css('border-color','#333333');
			$('#submit').css('color','#333333');
		});
	} else if ($(this).hasClass('republican')){
		$(this).css('color','white');
		$(this).css('background-color','#E10A19');
		$(this).css('border-color','#E10A19');
		$('.democrat').css('color','white');
		$('.democrat').css('background-color','white');
		$('.democrat').css('border-color','white');
		$(this).animate({left: '1000px'},750);	
		$('.democrat').animate({left: '1000px'},750, function(){
			$('.yourName').animate({bottom: '100px'},750);
			$('.yourName h2').css('color','#333333');
			$('#name').css('border-color','#333333');
			$('#submit').css('border-color','#333333');
			$('#submit').css('color','#333333');
		});	
	}
	party = $(this).text();
});

$('#submit').on('click',function(){
	event.preventDefault();
	name = $('#name').val();
	$('.yourName').animate({left: '1000px'},750,function(){
		if (party === "Republican"){
			randomrepublicanNoun = republicanNouns[Math.floor(Math.random()*republicanNouns.length)];
			randomrepublicanAdjective = republicanAdjectives[Math.floor(Math.random()*republicanAdjectives.length)];
			randomrepublicanVerb = republicanVerbs[Math.floor(Math.random()*republicanVerbs.length)];
			console.log(randomrepublicanNoun);
			console.log(randomrepublicanAdjective);
			console.log(randomrepublicanVerb);
			console.log(name);
			console.log(republicanChoices[5]);
			$('.response').html(republicanChoices[Math.floor(Math.random()*republicanChoices.length)]); 
		} else if (party === "Democrat") {
			randomdemocratNoun = democratNouns[Math.floor(Math.random()*democratNouns.length)];
			randomdemocratAdjective = democratAdjectives[Math.floor(Math.random()*democratAdjectives.length)];
			randomdemocratVerb = democratVerbs[Math.floor(Math.random()*democratVerbs.length)];
			$('.response').html(democratChoices[Math.floor(Math.random()*democratChoices.length)]);
		}
	});
	});
