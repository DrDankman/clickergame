		
		var button = document.getElementById("clickerbutton");
		var stenKnapp = document.getElementById("sten");
		var pinneKnapp = document.getElementById("pinne");
		var stavKnapp = document.getElementById("stav");
		var knivKnapp = document.getElementById("kniv");
		var macheteKnapp = document.getElementById("machete");
		var svärdKnapp = document.getElementById("svärd");
		var spjutKnapp = document.getElementById("spjut");
		var pilbågeKnapp = document.getElementById("pilbåge");
		var glockKnapp = document.getElementById("glock");
		var uziKnapp = document.getElementById("uzi");
		var ak47Knapp = document.getElementById("ak47");

		var title = document.getElementById("title");
		var scoreDiv = document.getElementById("score");
		var scoreText = document.getElementById("scoreText");
		var pengar_i_sekundhtml = document.getElementById("pengar_i_sekund");
		var pengarSpenderadehtml = document.getElementById("pengarSpenderade");

		var stenAnt = document.getElementById("stenAntal");
		var pinneAnt = document.getElementById("pinneAntal");
		var stavAnt = document.getElementById("stavAntal");
		var knivAnt = document.getElementById("knivAntal");
		var macheteAnt = document.getElementById("macheteAntal");
		var svärdAnt = document.getElementById("svärdAntal");
		var spjutAnt = document.getElementById("spjutAntal");
		var pilbågeAnt = document.getElementById("pilbågeAntal");
		var glockAnt = document.getElementById("glockAntal");
		var uziAnt = document.getElementById("uziAntal");
		var ak47Ant = document.getElementById("ak47Antal");

		var clickValue = 1;
		var bank = 0;
		var pengarSpenderade = 0;
		var pengar_i_sekund = 0;

		//kostnader
		var stenCost = 10;
		var pinneCost = 50;
		var stavCost = 100;
		var knivCost = 250;
		var macheteCost = 500;
		var svärdCost = 1000;
		var spjutCost = 3000;
		var pilbågeCost = 6000;
		var glockCost = 10000;
		var uziCost = 15000;
		var ak47Cost = 100000;

		//antal
		var stenAntal = 0;
		var pinneAntal = 0;
		var stavAntal = 0;
		var knivAntal = 0;
		var macheteAntal = 0;
		var svärdAntal = 0;
		var spjutAntal = 0;
		var pilbågeAntal = 0;
		var glockAntal = 0;
		var uziAntal = 0;
		var ak47Antal = 0;

		//funktion för att på pengar automatiskt
		setInterval(function() {
					bank += pengar_i_sekund/100; //Ger en hundradel av ens pengar/s varje hundradel
					scoreText.textContent = "$" + Math.round(bank*10)/10; 	//avrundning till en decimal, används på
			if (bank >= stenCost) {											//många fler ställen i scriptet
			stenKnapp.textContent = "Köp Sten $" + stenCost;}
			if (bank >= pinneCost) {
			pinneKnapp.textContent = "Köp Pinne $" + pinneCost;}
			if (bank >= stavCost) {
			stavKnapp.textContent = "Köp Stav $" + stavCost;}
			if (bank >= knivCost) {
			knivKnapp.textContent = "Köp Kniv $" + knivCost;}
			if (bank >= macheteCost) {
			macheteKnapp.textContent = "Köp Machete $" + macheteCost;}
			if (bank >= svärdCost) {
			svärdKnapp.textContent = "Köp Svärd $" + svärdCost;}
			if (bank >= spjutCost) {
			spjutKnapp.textContent = "Köp Spjut $" + spjutCost;}
			if (bank >= pilbågeCost) {
			pilbågeKnapp.textContent = "Köp Pilbåge $" + pilbågeCost;}
			if (bank >= glockCost) {
				//if (glockfunktion<1) {	Här och på rad 101-103 försökte jag trigga "rosa" animationen utan att
				//	glockfunktion++;		klick-animationen skulle sluta fungera. Prövade även någon Jquery-metod 
				//	glock();}				och det fungerade inte heller
			document.getElementById("glock").style.backgroundColor = "#ff00b2";		//ändar färgen från grå till rosa när man har råd
			document.getElementById("glock").style.animation = "rosa 2s";			//får knappen att lysa upp när man har råd
			glockKnapp.textContent = "Köp Glock $" + glockCost;}
			if (bank >= uziCost) {
			uziKnapp.textContent = "Köp Uzi $" + uziCost;
			document.getElementById("uzi").style.backgroundColor = "#ff0000";
			document.getElementById("uzi").style.animation = "röd 2s";}
			if (bank >= ak47Cost) {
			ak47Knapp.textContent = "Köp AK-47 $" + ak47Cost;
			document.getElementById("ak47").style.backgroundColor = "#ffd419";
			document.getElementById("ak47").style.animation = "guld 2s";}		
				}, 10);
		
		//var glockfunktion = 0;
		//function glock() {
		//	document.getElementById("glock").style.animation = "rosa 2s";}

		//Pengaupdatering för titeln på fliken
		setInterval(function() {
			title.textContent = "$" + Math.floor(bank);
		}, 1000);

		//ger 1$ per klick
		button.addEventListener("click", function() {
			bank += clickValue;
			scoreText.textContent = "$" + Math.floor(bank*10)/10;
			if (bank >= stenCost) {
			stenKnapp.textContent = "Köp Sten $" + stenCost;}
			if (bank >= pinneCost) {
			pinneKnapp.textContent = "Köp Pinne $" + pinneCost;}
			if (bank >= stavCost) {
			stavKnapp.textContent = "Köp Stav $" + stavCost;}
			if (bank >= knivCost) {
			knivKnapp.textContent = "Köp Kniv $" + knivCost;}	
			if (bank >= macheteCost) {
			macheteKnapp.textContent = "Köp Machete $" + macheteCost;}
			if (bank >= svärdCost) {
			svärdKnapp.textContent = "Köp Svärd $" + svärdCost;}
			if (bank >= spjutCost) {
			spjutKnapp.textContent = "Köp Spjut $" + spjutCost;}
			if (bank >= pilbågeCost) {
			pilbågeKnapp.textContent = "Köp Pilbåge $" + pilbågeCost;}
			if (bank >= glockCost) {
			glockKnapp.textContent = "Köp Glock $" + glockCost;
			document.getElementById("glock").style.animation = "rosa 2s";}
			if (bank >= uziCost) {
			uziKnapp.textContent = "Köp Uzi $" + uziCost;
			document.getElementById("uzi").style.animation = "röd 2s";}
			if (bank >= ak47Cost) {
			ak47Knapp.textContent = "Köp AK-47 $" + ak47Cost;
			document.getElementById("ak47").style.animation = "guld 2s";}
			
		});

		//knapparna är okända, if satserna ovan avslöjar dom när man har råd med dem
		scoreText.textContent = "$" + Math.floor(bank);
		stenKnapp.textContent = "?";
		pinneKnapp.textContent = "?";
		stavKnapp.textContent = "?";
		knivKnapp.textContent = "?";
		macheteKnapp.textContent = "?";
		svärdKnapp.textContent = "?";
		spjutKnapp.textContent = "?";
		pilbågeKnapp.textContent = "?";
		glockKnapp.textContent = "???";
		uziKnapp.textContent = "???";
		ak47Knapp.textContent = "???"; 


		scoreDiv.appendChild(scoreText);

		//Vad som händer när man trycker på en powerup-knapp
		stenKnapp.addEventListener("click", function() {
			if (bank >= stenCost) {
				pengar_i_sekund += 1;
				bank -= stenCost;
				pengarSpenderade += stenCost;
				stenCost = Math.floor(stenCost*11.5)/10;
				scoreText.textContent = "$" + Math.floor(bank*10)/10;
				pengar_i_sekundhtml.textContent = pengar_i_sekund + " per sekund";
				stenAntal ++;
				stenKnapp.textContent = "Köp Sten $" + stenCost;
				stenAnt.textContent = "Sten x" + stenAntal;
				//document.getElementById("stenAntal").style.animation = "1up 1s";
				pengarSpenderadehtml.textContent = "Du har spenderat $" + Math.floor(pengarSpenderade*10)/10;
			}
		})
		pinneKnapp.addEventListener("click", function() {
			if (bank >= pinneCost) {
				pengar_i_sekund += 2.5;
				bank -= pinneCost;
				pengarSpenderade += pinneCost;
				pinneCost = Math.floor(pinneCost*11.5)/10;
				scoreText.textContent = "$" + Math.floor(bank*10)/10;
				pengar_i_sekundhtml.textContent = pengar_i_sekund + " per sekund";
				pinneAntal ++;
				pinneKnapp.textContent = "Köp Pinne $" + pinneCost;
				pinneAnt.textContent = "Pinne x" + pinneAntal;
				pengarSpenderadehtml.textContent = "Du har spenderat $" + Math.floor(pengarSpenderade*10)/10;
			}
		})
		stavKnapp.addEventListener("click", function() {
			if (bank >= stavCost) {
				pengar_i_sekund += 5;
				bank -= stavCost;
				pengarSpenderade += stavCost;
				stavCost = Math.floor(stavCost*11.5)/10;
				scoreText.textContent = "$" + Math.floor(bank*10)/10;
				pengar_i_sekundhtml.textContent = pengar_i_sekund + " per sekund";
				stavAntal ++;
				stavKnapp.textContent = "Köp Stav $" + stavCost;
				stavAnt.textContent = "Stav x" + stavAntal;
				pengarSpenderadehtml.textContent = "Du har spenderat $" + Math.floor(pengarSpenderade*10)/10;
			}
		})
		knivKnapp.addEventListener("click", function() {
			if (bank >= knivCost) {
				pengar_i_sekund += 7;
				bank -= knivCost;
				pengarSpenderade += knivCost;
				knivCost = Math.floor(knivCost*11.5)/10;
				scoreText.textContent = "$" + Math.floor(bank*10)/10;
				pengar_i_sekundhtml.textContent = pengar_i_sekund + " per sekund";
				knivAntal ++;
				knivKnapp.textContent = "Köp Kniv $" + knivCost;
				knivAnt.textContent = "Kniv x" + knivAntal;
				pengarSpenderadehtml.textContent = "Du har spenderat $" + Math.floor(pengarSpenderade*10)/10;
			}
		})
		macheteKnapp.addEventListener("click", function() {
			if (bank >= macheteCost) {
				pengar_i_sekund += 10;
				bank -= macheteCost;
				pengarSpenderade += macheteCost;
				macheteCost = Math.floor(macheteCost*11.5)/10;
				scoreText.textContent = "$" + Math.floor(bank*10)/10;
				pengar_i_sekundhtml.textContent = pengar_i_sekund + " per sekund";
				macheteAntal ++;
				macheteKnapp.textContent = "Köp Machete $" + macheteCost;
				macheteAnt.textContent = "Machete x" + macheteAntal;
				pengarSpenderadehtml.textContent = "Du har spenderat $" + Math.floor(pengarSpenderade*10)/10;
			}
		})
		svärdKnapp.addEventListener("click", function() {
			if (bank >= svärdCost) {
				pengar_i_sekund += 15;
				bank -= svärdCost;
				pengarSpenderade += svärdCost;
				svärdCost = Math.floor(svärdCost*11.5)/10;
				scoreText.textContent = "$" + Math.floor(bank*10)/10;
				pengar_i_sekundhtml.textContent = pengar_i_sekund + " per sekund";
				svärdAntal ++;
				svärdKnapp.textContent = "Köp Svärd $" + svärdCost;
				svärdAnt.textContent = "Svärd x" + svärdAntal;
				pengarSpenderadehtml.textContent = "Du har spenderat $" + Math.floor(pengarSpenderade*10)/10;
			}
		})
		spjutKnapp.addEventListener("click", function() {
			if (bank >= spjutCost) {
				pengar_i_sekund += 20;
				bank -= spjutCost;
				pengarSpenderade += spjutCost;
				spjutCost = Math.floor(spjutCost*11.5)/10;
				scoreText.textContent = "$" + Math.floor(bank*10)/10;
				pengar_i_sekundhtml.textContent = pengar_i_sekund + " per sekund";
				spjutAntal ++;
				spjutKnapp.textContent = "Köp Spjut $" + spjutCost;
				spjutAnt.textContent = "Spjut x" + spjutAntal;
				pengarSpenderadehtml.textContent = "Du har spenderat $" + Math.floor(pengarSpenderade*10)/10;
			}
		})
		pilbågeKnapp.addEventListener("click", function() {
			if (bank >= pilbågeCost) {
				pengar_i_sekund += 30;
				bank -= pilbågeCost;
				pengarSpenderade += pilbågeCost;
				pilbågeCost = Math.floor(pilbågeCost*11.5)/10;
				scoreText.textContent = "$" + Math.floor(bank*10)/10;
				pengar_i_sekundhtml.textContent = pengar_i_sekund + " per sekund";
				pilbågeAntal ++;
				pilbågeKnapp.textContent = "Köp Pilbåge $" + pilbågeCost;
				pilbågeAnt.textContent = "Pilbåge x" + pilbågeAntal;
				pengarSpenderadehtml.textContent = "Du har spenderat $" + Math.floor(pengarSpenderade*10)/10;
			}
		})
		glockKnapp.addEventListener("click", function() {
			if (bank >= glockCost) {
				pengar_i_sekund += 60;
				bank -= glockCost;
				pengarSpenderade += glockCost;
				glockCost = Math.floor(glockCost*11.5)/10;
				scoreText.textContent = "$" + Math.floor(bank*10)/10;
				pengar_i_sekundhtml.textContent = pengar_i_sekund + " per sekund";
				glockAntal ++;
				glockKnapp.textContent = "Köp Glock $" + glockCost;
				glockAnt.textContent = "Glock x" + glockAntal;
				pengarSpenderadehtml.textContent = "Du har spenderat $" + Math.floor(pengarSpenderade*10)/10;
			}
		})
		uziKnapp.addEventListener("click", function() {
			if (bank >= uziCost) {
				pengar_i_sekund += 100;
				bank -= uziCost;
				pengarSpenderade += uziCost;
				uziCost = Math.floor(uziCost*11.5)/10;
				scoreText.textContent = "$" + Math.floor(bank*10)/10;
				pengar_i_sekundhtml.textContent = pengar_i_sekund + " per sekund";
				uziAntal ++;
				uziKnapp.textContent = "Köp Uzi $" + uziCost;
				uziAnt.textContent = "Uzi x" + uziAntal;
				pengarSpenderadehtml.textContent = "Du har spenderat $" + Math.floor(pengarSpenderade*10)/10;
			}
		})
		ak47Knapp.addEventListener("click", function() {
			if (bank >= ak47Cost) {
				pengar_i_sekund += 200;
				bank -= ak47Cost;
				pengarSpenderade += ak47Cost;
				ak47Cost = Math.floor(ak47Cost*11.5)/10;
				scoreText.textContent = "$" + Math.floor(bank*10)/10;
				pengar_i_sekundhtml.textContent = pengar_i_sekund + " per sekund";
				ak47Antal ++;
				ak47Knapp.textContent = "Köp AK-47 $" + ak47Cost;
				ak47Ant.textContent = "AK-47 x" + ak47Antal;
				pengarSpenderadehtml.textContent = "Du har spenderat $" + Math.floor(pengarSpenderade*10)/10;
			}
		})