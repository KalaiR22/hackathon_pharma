function findTablets() {
            const healthIssueInput = document.getElementById('healthIssueInput').value.toLowerCase();
            const tabletListDiv = document.getElementById('tabletList');
            tabletListDiv.innerHTML = ''; // Clear previous content

            if (healthIssueInput === 'fever') {
                const feverTablets = [
                    { name: 'Acetaminophen (Tylenol)', dosage: 'Adults: 500mg to 1000mg every 4 to 6 hours', purpose: 'Reduces fever and provides mild to moderate pain relief.' },
                    { name: 'Ibuprofen (Advil, Motrin)', dosage: 'Adults: 200mg to 400mg every 4 to 6 hours', purpose: 'Reduces fever, provides anti-inflammatory effects, and eases mild to moderate pain.' }
                ];
                createTabletList(feverTablets);
            } else if (healthIssueInput === 'cold') {
                const coldTablets = [
                    { name: 'Cetirizine (Zyrtec)', dosage: 'Adults and children over 6 years: 5mg to 10mg once daily', purpose: 'Relieves sneezing, runny nose, itching, and other allergy and cold-related symptoms.' },
                    { name: 'Pseudoephedrine (Sudafed)', dosage: 'Adults: 60mg every 4 to 6 hours', purpose: 'Relieves nasal congestion and sinus pressure.' },
                    { name: 'Ibuprofen (Advil, Motrin)', dosage: 'Adults: 200mg to 400mg every 4 to 6 hours', purpose: 'Reduces fever, provides anti-inflammatory effects, and eases mild to moderate pain.' }
                ];
                createTabletList(coldTablets);
            } else if (healthIssueInput === 'influenza') {
                const influenzaTablets = [
                    { name: 'Oseltamivir (Tamiflu)', dosage: 'Dosage varies based on age and weight; follow doctor\'s instructions', purpose: 'Antiviral medication that can reduce the severity and duration of influenza symptoms.' },
                    { name: 'Acetaminophen (Tylenol)', dosage: 'Adults: 500mg to 1000mg every 4 to 6 hours', purpose: 'Reduces fever and provides mild to moderate pain relief.' }
                ];
                createTabletList(influenzaTablets);
            } else if (healthIssueInput === 'headaches') {
                const headacheTablets = [
                    { name: 'Acetaminophen (Tylenol)', dosage: 'Adults: 500mg to 1000mg every 4 to 6 hours', purpose: 'Provides pain relief and reduces fever if present.' },
                    { name: 'Ibuprofen (Advil, Motrin)', dosage: 'Adults: 200mg to 400mg every 4 to 6 hours', purpose: 'Reduces pain and inflammation associated with headaches.' },
                    { name: 'Aspirin', dosage: 'Adults: 325mg to 1000mg every 4 to 6 hours', purpose: 'Reduces pain and inflammation associated with headaches.' }
                ];
                createTabletList(headacheTablets);
            } else if (healthIssueInput === 'allergies') {
                const allergyTablets = [
                    { name: 'Cetirizine (Zyrtec)', dosage: 'Adults and children over 6 years: 5mg to 10mg once daily', purpose: 'Relieves sneezing, runny nose, itching, and other allergy symptoms.' },
                    { name: 'Loratadine (Claritin)', dosage: 'Adults and children over 2 years: 10mg once daily', purpose: 'Relieves sneezing, runny nose, itching, and other allergy symptoms.' }
                ];
                createTabletList(allergyTablets);
            } else if (healthIssueInput === 'back pain') {
                const backPainTablets = [
                    { name: 'Acetaminophen (Tylenol)', dosage: 'Adults: 500mg to 1000mg every 4 to 6 hours', purpose: 'Provides pain relief and reduces inflammation.' },
                    { name: 'Ibuprofen (Advil, Motrin)', dosage: 'Adults: 200mg to 400mg every 4 to 6 hours', purpose: 'Reduces pain and inflammation associated with back pain.' },
                    { name: 'Naproxen (Aleve)', dosage: 'Adults: 220mg to 440mg every 8 to 12 hours', purpose: 'Reduces pain and inflammation associated with back pain.' }
                ];
                createTabletList(backPainTablets);
            } else if (healthIssueInput === 'fatigue') {
                const fatigueTablets = [
                    { name: 'Caffeine (Coffee or Tea)', dosage: 'Varies based on the individual and tolerance', purpose: 'Provides temporary energy boost and increased alertness.' },
                    { name: 'Multivitamins', dosage: 'Follow the recommended dosage on the package', purpose: 'Helps support overall health and energy levels.' }
                ];
                createTabletList(fatigueTablets);
            } else {
                tabletListDiv.innerHTML = '<p>No tablets found for the given health issue.</p>';
            }
        }

        function createTabletList(tablets) {
            const tabletListDiv = document.getElementById('tabletList');
            const ul = document.createElement('ul');

            tablets.forEach(tablet => {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${tablet.name}:</strong><br>${tablet.dosage}<br>Purpose: ${tablet.purpose}`;
                ul.appendChild(li);
            });

            tabletListDiv.appendChild(ul);
        }