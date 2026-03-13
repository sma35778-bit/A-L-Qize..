// Quiz questions database for A/L subjects - සිංහල සංඛ්‍යාලේඛනය
const quizData = {
    biology: [
        {
            question: "ජීවයේ මූලික ඒකකය මොකක්ද?",
            options: ["සෛලය", "අණුකරණය", "මයිටෝකොන්ඩ්‍රියාව", "රයිබෝසෝමය"],
            correct: 0,
            explanation: "සෛලය ජීවයේ මූලික ව්‍යුහය සහ ක්‍රියාකාරී ඒකකයයි. එය ජීව විද්‍යාවේ අඩංගු කොටසයි."
        },
        {
            question: "DNA යන වචනයේ පූර්ණ නාමය මොකක්ද?",
            options: ["Deoxyribonucleic Acid", "Ribonucleic Acid", "Adenosine Triphosphate", "Amino Acid"],
            correct: 0,
            explanation: "DNA යනු Deoxyribonucleic Acid හෙවත් ඩියොක්සි රයිබෝ න්‍යුක්ලියික් අම්ලයයි. එය ජීවත්වය පහසු කරයි."
        },
        {
            question: "Protein සෑදීමට උපකාරී organelle එක කුමක්ද?",
            options: ["රයිබෝසෝමය", "මයිටෝකොන්ඩ්‍රියාව", "ලයිසෝසෝමය", "නියුක්ලියසය"],
            correct: 0,
            explanation: "රයිබෝසෝමය mRNA කියවා අම්නෝ අම්ල වලින් ප්‍රෝටීන් නිපදවයි. එය සෛලේ ප්‍රෝටීන් නිපැයුම් ව්‍යුහයයි."
        },
        {
            question: "Photosynthesis සිදුවන organelle එක කුමක්ද?",
            options: ["ක්ලෝරොප්ලාස්තත්", "මයිටෝකොන්ඩ්‍රියාව", "නියුක්ලියසය", "රයිබෝසෝමය"],
            correct: 0,
            explanation: "ක්ලෝරොප්ලාස්තත් Photosynthesis ක්‍රියාවලිය සිදු කරයි. එය සෛල තුළ හොඳ ආලෝකය ග්රහණය කරයි."
        },
        {
            question: "Mitosis මඟින් සෑදෙන daughter cells ගණන කීයද?",
            options: ["2", "4", "1", "8"],
            correct: 0,
            explanation: "Mitosis මඟින් 1 cell එකක් 2 identical daughter cells 2ක් වන බව පිරිසිදු වේ. එය සමාන සෛල වෙනකිරීම සඳහා යොදයි."
        },
        {
            question: "Meiosis මඟින් සෑදෙන daughter cells ගණන කීයද?",
            options: ["2", "4", "1", "8"],
            correct: 1,
            explanation: "Meiosis මඟින් 1 cell එකක් 4 genetically different daughter cells 4ක් වන බව පිරිසිදු වේ. එය gamete නිපැයුම සඳහා යොදයි."
        },
        {
            question: "Plant cell වලට පමණක් තිබෙන organelle එකක් කියන්න.",
            options: ["ක්ලෝරොප්ලාස්තත්", "Centrosome", "Lysosome", "Peroxisome"],
            correct: 0,
            explanation: "ක්ලෝරොප්ලාස්තත් plant cells වලට පමණක් ඇත. එහිදී Photosynthesis සිදුවේ. Animal cells වලට ක්ලෝරොප්ලාස්තත් නැත."
        },
        {
            question: "Cell membrane වල ප්‍රධාන ව්‍යුහය මොකක්ද?",
            options: ["Phospholipid bilayer", "Protein layer", "Carbohydrate layer", "Steroid layer"],
            correct: 0,
            explanation: "Cell membrane එකේ ප්‍රධාන ව්‍යුහය Phospholipid bilayer එකයි. එය fluid mosaic model ලෙස හැඳින්වේ."
        },
        {
            question: "Osmosis යනු කුමක්ද?",
            options: ["Semi-permeable membrane හරහා water molecule වල concentration gradient අනුව ගමන් කිරීම", "Active transport මගින් molecule ගමන්", "Endocytosis මගින් සම්පත් ග්ලසජය", "Exocytosis මගින් පිටතට ගෙන යාම"],
            correct: 0,
            explanation: "Osmosis යනු semi-permeable membrane හරහා water molecule වල concentration gradient අනුව passive transport වගේ ගමන් කිරීමයි."
        },
        {
            question: "Human body වල විශාලම organ එක කුමක්ද?",
            options: ["චර්මය", "හදවත්ත", "යක්ළුව", "යක්ෂය"],
            correct: 0,
            explanation: "චර්මය human body වල විශාලතම organ එකයි. එය පරිමාණයෙන් සහ බරෙන් වැඩි දෘශ්‍ය වලින් පිහිටයි."
        },
        {
            question: "Blood වල oxygen ප්‍රවාහනය කරන molecule එක කුමක්ද?",
            options: ["Hemoglobin", "Plasma", "White blood cells", "Platelets"],
            correct: 0,
            explanation: "Hemoglobin red blood cells වලට ඇති protein එකයි. එය oxygen ග්ලසජයට අනයාර්ථයෙන් බැඳීමෙන් oxygen ප්‍රවාහනය කරයි."
        },
        {
            question: "Human heart එකේ chambers ගණන කීයද?",
            options: ["4", "2", "6", "8"],
            correct: 0,
            explanation: "Human heart එකේ chambers 4ක් ඇත: 2 atria සහ 2 ventricles. මෙය double circulation පද්ධතියක් ලෙස ක්‍රියා කරයි."
        },
        {
            question: "Kidney වල functional unit එක කුමක්ද?",
            options: ["Nephron", "Neuron", "Alveolus", "Glomerulus"],
            correct: 0,
            explanation: "Nephron kidney වල functional unit එකයි. එය filtration, reabsorption, secretion ක්‍රියාදායක වේ. එක් kidney එකක් nephron 1 million ගණනක් ඇත."
        },
        {
            question: "Enzyme යනු කුමක්ද?",
            options: ["Biological catalyst", "Hormone", "Vitamin", "Antibody"],
            correct: 0,
            explanation: "Enzyme යනු biological catalyst එකයි. එය chemical reactions වේගවත් කරයි, හොඳින් තැබිය හැකි proteins හැඩයට පත් කරයි."
        },
        {
            question: "Digestion process එක ආරම්භ වෙන්නේ කොහෙද?",
            options: ["Mouth", "Stomach", "Small intestine", "Esophagus"],
            correct: 0,
            explanation: "Digestion ආරම්භ වෙන්නේ Mouth තුළයි. එහි mechanical (mastication) සහ chemical (saliva) digestion සිදුවේ."
        },
        {
            question: "Saliva වල enzyme එක මොකක්ද?",
            options: ["Amylase", "Pepsin", "Lipase", "Trypsin"],
            correct: 0,
            explanation: "Amylase saliva වල ප්‍රධාන enzyme එකයි. එය starch Maltose කිහිපයක් පරිවර්තනය කරයි."
        },
        {
            question: "Stomach වල protein digestion කරන enzyme එක මොකක්ද?",
            options: ["Pepsin", "Amylase", "Lipase", "Trypsin"],
            correct: 0,
            explanation: "Pepsin stomach වල protein digestion කරන enzyme එකයි. එහිදී Pepsinogen Pepsin ක්‍රියාත්මක වේ. stomach acid enzymes එකට බෙදයි."
        },
        {
            question: "Small intestine වල digestion process එකට වැදගත් organ දෙක මොනවාද?",
            options: ["Liver සහ Pancreas", "Stomach සහ Esophagus", "Kidney සහ Bladder", "Heart සහ Lungs"],
            correct: 0,
            explanation: "Liver (bile නිපදවයි) සහ Pancreas (digestive enzymes නිපදවයි) small intestine වල digestion සඳහා වැදගත් organ දෙකයි."
        },
        {
            question: "Photosynthesis equation එක කුමක්ද?",
            options: ["6CO2 + 6H2O → C6H12O6 + 6O2", "C6H12O6 + 6O2 → 6CO2 + 6H2O", "6CO2 + 6O2 → C6H12O6 + 6H2O", "C6H12O6 → 6CO2 + 6H2O"],
            correct: 0,
            explanation: "Photosynthesis equation: 6CO2 + 6H2O → C6H12O6 (glucose) + 6O2. සුරියාගේ ආලෝකය භාවිතා කර carbon dioxide සහ water වලින් glucose සහ oxygen නිපදවයි."
        },
        {
            question: "Chlorophyll වල ප්‍රධාන කාර්යය මොකක්ද?",
            options: ["Light energy absorb කිරීම", "Water split කිරීම", "Carbon dioxide ග්ලපනය", "Oxygen නිපදවමින්"],
            correct: 0,
            explanation: "Chlorophyll ප්‍රධාන කාර්යය light energy absorb කිරීමයි. එය chloroplast ක්ලෝරොප්ලාස්තත් වල pigment එකයි."
        },
        {
            question: "Genetics පියා ලෙස හඳුන්වන්නේ කාටද?",
            options: ["Gregor Mendel", "Charles Darwin", "James Watson", "Francis Crick"],
            correct: 0,
            explanation: "Gregor Mendel genetics වල පියා ලෙස හඳුන්වනු ලබයි. ඔහු pea plants සමඟ inheritance patterns හඳුනාගෙන inheritences principles මත පදනම් වූයේ."
        },
        {
            question: "Gene යනු කුමක්ද?",
            options: ["DNA segment එකක්", "Chromosome එකක්", "Protein එකක්", "RNA molecule එකක්"],
            correct: 0,
            explanation: "Gene යනු DNA segment එකක්. එහි hereditary information තිබේ. එය protein නිපදවීමට instructions රැසක් දරනවා."
        },
        {
            question: "Human chromosome ගණන කීයද?",
            options: ["46", "44", "48", "42"],
            correct: 0,
            explanation: "Human body එකේ chromosomes 46 (23 pairs) ගණනක් ඇත. එය 22 pairs autosomes සහ 1 pair sex chromosomes (XY හෝ XX)."
        },
        {
            question: "Gametes වල chromosome ගණන කීයද?",
            options: ["23", "46", "44", "22"],
            correct: 0,
            explanation: "Gametes (sperm සහ egg) chromosome ගණන 23 ක් ඇත. Mitosis වල වඩා Meiosis මගින් සෑදෙන බව පැහැදිලිය."
        },
        {
            question: "Evolution theory එක දායක කළේ කවුද?",
            options: ["Charles Darwin", "Gregor Mendel", "James Watson", "Francis Crick"],
            correct: 0,
            explanation: "Charles Darwin evolution theory දායක කළේ. ඔහු natural selection theory හඳුනාගෙන එය species evolution හි ප්‍රධාන mechanism ලෙස හැඳින්විය."
        },
        {
            question: "Natural selection යනු කුමක්ද?",
            options: ["Environment එකට හොඳට අනුගත organisms survive වීම", "Random mating ගණන", "Genetic mutations මගින් වෙනස්කම්", "Artificial selection"],
            correct: 0,
            explanation: "Natural selection යනු environment එකට හොඳට අනුගත organisms survive වීමයි. සුදුසුස ලක්ෂණ මැදින් offspring generation ගණන තැබීම."
        },
        {
            question: "Ecosystem යනු කුමක්ද?",
            options: ["Living organisms සහ environment එකේ interaction", "Biotic factors පමණක්", "Abiotic factors පමණක්", "Community of organisms පමණක්"],
            correct: 0,
            explanation: "Ecosystem යනු living organisms (biotic) සහ non-living environment (abiotic) factor අතර සම්බන්ධතා පද්ධතියයි. energy flow සහ nutrient cycling ඇතීවීම."
        },
        {
            question: "Food chain යනු කුමක්ද?",
            options: ["Energy transfer sequence එක", "Decomposers වල network", "Producers සහ consumers අතර සබඳතාව", "Trophic levels වල classification"],
            correct: 0,
            explanation: "Food chain යනු energy transfer sequence එකයි. producers ../../../ consumers හොඳින් වැඩි trophic levels තුළ energy ගසjarı."
        },
        {
            question: "Producers යනු කවුද?",
            options: ["Plants (Autotrophs)", "Herbivores", "Carnivores", "Omnivores"],
            correct: 0,
            explanation: "Producers යනු autotrophs (plants, algae, certain bacteria) වේ. ඒවා inorganic compounds (CO2, H2O) organic compounds (glucose) Photosynthesis මගින් නිපදවයි."
        },
        {
            question: "Consumers යනු කවුද?",
            options: ["Animals (Heterotrophs)", "Plants", "Fungi", "Bacteria"],
            correct: 0,
            explanation: "Consumers යනු heterotrophs (animals) වේ. ඒවා organic compounds other organisms හොඳින් ගනී. herbivores, carnivores, omnivores සමඟ වෙන්කරයි."
        }
    ],

    physics: [
        // 1. Force definition
        {
            question: "බලය (Force) යනු කුමක්ද?",
            options: [
                "වස්තුවක චලනය හෝ ආකෘතිය වෙනස් කරන බලපෑම",
                "වස්තුවක ගමන් කරමින් ඇති ශක්තිය",
                "වස්තුවක භරපතලය",
                "වස්තුවක අලුත්වැඩියාව"
            ],
            correct: 0,
            explanation: "බලය යනු වස්තුවක චලනය හෝ ආකෘතිය වෙනස් කරන බලපෑමයි. එය mass සහ acceleration ගණනය කිරීමෙන් හඳුනාගත හැකිය."
        },
        // 2. SI unit of Force
        {
            question: "බලයේ SI unit එක කුමක්ද?",
            options: [
                "Kilogram (kg)",
                "Newton (N)",
                "Pascal (Pa)",
                "Watt (W)"
            ],
            correct: 1,
            explanation: "බලයේ SI unit එක Newton (N) වේ. 1 N = 1 kg·m/s²"
        },
        // 3. Newton's First Law
        {
            question: "Newtonගේ පළමු නියමය කුමක්ද?",
            options: [
                "බාහිර බලයක් ක්‍රියා නොකළහොත් වස්තුව නිශ්චලව හෝ සමාන වේගයෙන් ගමන් කරයි",
                "Force = mass × acceleration",
                "සෑම ක්‍රියාවකටම සමාන හා විරුද්ධ ප්‍රතික්‍රියාවක් ඇත",
                "බලය ප්‍රතිරෝධයට වඩා වැඩිය"
            ],
            correct: 0,
            explanation: "Newtonගේ පළමු නියමය (Inertia) කියන්නේ බාහිර බලයක් ක්‍රියා නොකළහොත් වස්තුව නිශ්චලව හෝ සමාන වේගයෙන් ගමන් කරයි."
        },
        // 4. Newton's Second Law
        {
            question: "Newtonගේ දෙවන නියමය කුමක්ද?",
            options: [
                "බාහිර බලයක් ක්‍රියා නොකළහොත් වස්තුව නිශ්චලව හෝ සමාන වේගයෙන් ගමන් කරයි",
                "Force = mass × acceleration (F = ma)",
                "සෑම ක්‍රියාවකටම සමාන හා විරුද්ධ ප්‍රතික්‍රියාවක් ඇත",
                "බලය ප්‍රතිරෝධයට වඩා වැඩිය"
            ],
            correct: 1,
            explanation: "Newtonගේ දෙවන නියමයට අනුව F = ma. වස්තුවක බලය = එහි mass × acceleration."
        },
        // 5. Newton's Third Law
        {
            question: "Newtonගේ තෙවන නියමය කුමක්ද?",
            options: [
                "බාහිර බලයක් ක්‍රියා නොකළහොත් වස්තුව නිශ්චලව හෝ සමාන වේගයෙන් ගමන් කරයි",
                "Force = mass × acceleration (F = ma)",
                "සෑම ක්‍රියාවකටම සමාන හා විරුද්ධ پ්‍රතික්‍රියාවක් ඇත",
                "බලය ප්‍රතිරෝධයට වඩා වැඩිය"
            ],
            correct: 2,
            explanation: "Newtonගේ තෙවන නියමයට අනුව සෑම ක්‍රියාවකටම සමාන හා විරුද්ධ ප්‍රතික්‍රියාවක් ඇත."
        },
        // 6. Velocity definition
        {
            question: "වේගය (Velocity) යනු කුමක්ද?",
            options: [
                "දුර වෙනස් වීමේ වේගය direction එක සමඟ",
                "දුර කීයක් ගමන් කළේද යන්න",
                "ඉක්මනින් ගමන් කිරීම",
                "ත්වරා ගමන් කිරීම"
            ],
            correct: 0,
            explanation: "වේගය යනු දුර වෙනස් වීමේ වේගය direction එක සමඟ. එය vector quantity එකක්."
        },
        // 7. Acceleration definition
        {
            question: "acceleration යනු කුමක්ද?",
            options: [
                "වේගය වෙනස් වීමේ වේගය",
                "දුර වෙනස් වීමේ වේගය",
                "සමය ගණනය කිරීම",
                "බලය ප්‍රයෝජනය"
            ],
            correct: 0,
            explanation: "Acceleration යනු වේගය වෙනස් වීමේ වේගය. a = Δv/Δt."
        },
        // 8. SI unit of acceleration
        {
            question: "acceleration එකේ SI unit එක කුමක්ද?",
            options: [
                "m/s",
                "m/s²",
                "km/h²",
                "cm/s"
            ],
            correct: 1,
            explanation: "Acceleration එකේ SI unit එක m/s² වේ. meter per second squared."
        },
        // 9. Work definition
        {
            question: "වැඩ (Work) යනු කුමක්ද?",
            options: [
                "Force × distance",
                "Power × time",
                "Energy × mass",
                "Mass × velocity"
            ],
            correct: 0,
            explanation: "වැඩ (Work) යනු Force × distance. W = F × d."
        },
        // 10. SI unit of Work
        {
            question: "වැඩේ SI unit එක කුමක්ද?",
            options: [
                "Watt (W)",
                "Joule (J)",
                "Newton (N)",
                "Pascal (Pa)"
            ],
            correct: 1,
            explanation: "වැඩේ SI unit එක Joule (J) වේ. 1 J = 1 N·m."
        },
        // 11. Power definition
        {
            question: "බලය වැඩ කිරීමේ වේගය කුමක්ද?",
            options: [
                "Power",
                "Energy",
                "Force",
                "Momentum"
            ],
            correct: 0,
            explanation: "Power යනු වැඩ කිරීමේ වේගයයි. P = W/t."
        },
        // 12. SI unit of Power
        {
            question: "Power එකේ SI unit එක කුමක්ද?",
            options: [
                "Joule (J)",
                "Newton (N)",
                "Watt (W)",
                "Volt (V)"
            ],
            correct: 2,
            explanation: "Power එකේ SI unit එක Watt (W) වේ. 1 W = 1 J/s."
        },
        // 13. Kinetic Energy definition
        {
            question: "Kinetic energy යනු කුමක්ද?",
            options: [
                "චලනයෙන් ඇති ශක්තිය",
                "ස්ථානයෙන් ඇති ශක්තිය",
                "අක්කරාගත ශක්තිය",
                "තාප ශක්තිය"
            ],
            correct: 0,
            explanation: "Kinetic energy යනු චලනයෙන් ඇති ශක්තිය. KE = ½mv²."
        },
        // 14. Kinetic Energy formula
        {
            question: "Kinetic energy formula එක කුමක්ද?",
            options: [
                "KE = 1/2 mv²",
                "KE = mv",
                "KE = mgh",
                "KE = Fd"
            ],
            correct: 0,
            explanation: "Kinetic energy formula: KE = ½mv² (half times mass times velocity squared)."
        },
        // 15. Potential Energy definition
        {
            question: "Potential energy යනු කුමක්ද?",
            options: [
                "උස හෝ ස්ථානය නිසා ඇති ශක්තිය",
                "චලනයෙන් ඇති ශක්තිය",
                "අක්කරාගත ශක්තිය",
                "තාප ශක්තිය"
            ],
            correct: 0,
            explanation: "Potential energy යනු උස හෝ ස්ථානය නිසා ඇති ශක්තිය. එය gravitational හෝ elastic විය හැකිය."
        },
        // 16. Potential Energy formula (Gravitational)
        {
            question: "Potential energy formula එක කුමක්ද?",
            options: [
                "PE = mgh",
                "PE = 1/2 mv²",
                "PE = Fd",
                "PE = mv"
            ],
            correct: 0,
            explanation: "Gravitational potential energy: PE = mgh (mass × gravity × height)."
        },
        // 17. Momentum definition
        {
            question: "Momentum යනු කුමක්ද?",
            options: [
                "mass × velocity",
                "mass × acceleration",
                "force × time",
                "energy × time"
            ],
            correct: 0,
            explanation: "Momentum යනු mass × velocity. p = mv. එය vector quantity එකක්."
        },
        // 18. Momentum formula
        {
            question: "Momentum formula එක කුමක්ද?",
            options: [
                "p = mv",
                "p = 1/2 mv²",
                "p = F/a",
                "p = m/v"
            ],
            correct: 0,
            explanation: "Momentum formula: p = mv (momentum = mass × velocity)."
        },
        // 19. Pressure definition
        {
            question: "Pressure යනු කුමක්ද?",
            options: [
                "Force / Area",
                "Force × Area",
                "Mass / Volume",
                "Energy / Time"
            ],
            correct: 0,
            explanation: "Pressure යනු Force / Area. P = F/A. එය force එක area එකක් මත තිබෙන බලපෑමයි."
        },
        // 20. SI unit of Pressure
        {
            question: "Pressure unit එක කුමක්ද?",
            options: [
                "Newton (N)",
                "Pascal (Pa)",
                "Watt (W)",
                "Joule (J)"
            ],
            correct: 1,
            explanation: "Pressure එකේ SI unit එක Pascal (Pa) වේ. 1 Pa = 1 N/m²."
        },
        // 21. Speed of light in vacuum
        {
            question: "Light speed vacuum තුළ කීයද?",
            options: [
                "3 × 10⁸ m/s",
                "3 × 10⁶ m/s",
                "3 × 10⁵ m/s",
                "1 × 10⁸ m/s"
            ],
            correct: 0,
            explanation: "Light speed vacuum තුළ 3 × 10⁸ m/s (300,000 km/s). c = 299,792,458 m/s."
        },
        // 22. Ohm's Law
        {
            question: "Ohm's Law කුමක්ද?",
            options: [
                "V = IR",
                "V = I/R",
                "I = V/R",
                "R = V/I"
            ],
            correct: 0,
            explanation: "Ohm's Law: V = IR (Voltage = Current × Resistance). හෝ I = V/R, R = V/I."
        },
        // 23. SI unit of Electric Current
        {
            question: "Electric current unit එක කුමක්ද?",
            options: [
                "Volt (V)",
                "Ampere (A)",
                "Ohm (Ω)",
                "Coulomb (C)"
            ],
            correct: 1,
            explanation: "Electric current එකේ SI unit එක Ampere (A) වේ."
        },
        // 24. SI unit of Resistance
        {
            question: "Electric resistance unit එක කුමක්ද?",
            options: [
                "Volt (V)",
                "Ampere (A)",
                "Ohm (Ω)",
                "Watt (W)"
            ],
            correct: 2,
            explanation: "Electric resistance එකේ SI unit එක Ohm (Ω) වේ."
        },
        // 25. SI unit of Voltage
        {
            question: "Voltage unit එක කුමක්ද?",
            options: [
                "Ampere (A)",
                "Ohm (Ω)",
                "Volt (V)",
                "Watt (W)"
            ],
            correct: 2,
            explanation: "Voltage (potential difference) එකේ SI unit එක Volt (V) වේ."
        },
        // 26. Wave definition
        {
            question: "Wave යනු කුමක්ද?",
            options: [
                "Energy propagate කරන disturbance එකක්",
                "Matter හුවමාරයක්",
                "ආලෝකය ගමන් කරන ආකාරය",
                "ශක්තිය තරංගය"
            ],
            correct: 0,
            explanation: "Wave යනු energy propagate කරන disturbance එකක්. එය matter නැහැ බවටත් ගමන් කිරීමට හැකියාව ඇත."
        },
        // 27. Wave speed formula
        {
            question: "Wave speed formula එක කුමක්ද?",
            options: [
                "v = fλ",
                "v = f/λ",
                "v = λ/f",
                "v = f + λ"
            ],
            correct: 0,
            explanation: "Wave speed: v = fλ (velocity = frequency × wavelength)."
        },
        // 28. SI unit of Frequency
        {
            question: "Frequency unit එක කුමක්ද?",
            options: [
                "Watt (W)",
                "Hertz (Hz)",
                "Meter (m)",
                "Second (s)"
            ],
            correct: 1,
            explanation: "Frequency එකේ SI unit එක Hertz (Hz) වේ. 1 Hz = 1 cycle per second."
        },
        // 29. Reflection definition
        {
            question: "Reflection යනු කුමක්ද?",
            options: [
                "Light surface එකකින් නැවත පැන යාම",
                "Light refraction වීම",
                "Light absorption වීම",
                "Light scattering වීම"
            ],
            correct: 0,
            explanation: "Reflection යනු light wave එක surface එකකින් නැවත පැන යාමයි.入射角 = 反射 angle."
        },
        // 30. Refraction definition
        {
            question: "Refraction යනු කුමක්ද?",
            options: [
                "Medium වෙනස් වීමෙන් light direction වෙනස් වීම",
                "Light bouncing back වීම",
                "Light absorption වීම",
                "Light dispersion වීම"
            ],
            correct: 0,
            explanation: "Refraction යනු light wave එක medium වෙනස් වීමෙන් direction වෙනස් වීමයි. Snell's law අනුව."
        },
        // 31. Density definition
        {
            question: "Density (ගැංතුම) යනු කුමක්ද?",
            options: [
                "Mass / Volume",
                "Volume / Mass",
                "Mass × Volume",
                "Force / Area"
            ],
            correct: 0,
            explanation: "Density යනු mass / volume. ρ = m/V. එය ඒකකණ්ඩුව බර පරිමාණය මැදින් අසන්නන් බව පරික්ෂා කරයි."
        },
        // 32. Density formula
        {
            question: "Density formula එක කුමක්ද?",
            options: [
                "ρ = m/V",
                "ρ = V/m",
                "ρ = mv",
                "ρ = m/g"
            ],
            correct: 0,
            explanation: "Density formula: ρ = m/V (rho = mass divided by volume). SI unit: kg/m³."
        },
        // 33. Specific heat capacity
        {
            question: "Specific heat capacity යනු කුමක්ද?",
            options: [
                "unit mass 1 kg ශක්තිය 1°C වේගයෙන් වැඩියට ගැනීමට අවශ්‍ය තාපය",
                "unit volume ශක්තිය",
                "unit mass ශක්තිය",
                "තාපය හා තාපය හුවමාරය"
            ],
            correct: 0,
            explanation: "Specific heat capacity යනු unit mass (1 kg) ශක්තිය 1°C වේගයෙන් වැඩියට ගැනීමට අවශ්‍ය තාපයයි. c = Q/(mΔT)."
        },
        // 34. Bernoulli's principle
        {
            question: "Bernoulli's principle කුමක්ද?",
            options: [
                "ද්‍රව ගමන් කිරීමේ වේගය වැඩි වන paranමස්ථයක් තුළ තාපය වැඩි වන්නේ නැත",
                "බලය හා අලුත්වැඩියාව අතර සබඳතාව",
                "තරංග වේගය මධ්‍යස්ථයට අනුව වෙනස් වේ",
                "ශක්තිය සංරක්ෂණය වේ"
            ],
            correct: 0,
            explanation: "Bernoulli's principle: ද්‍රව ගමන් කිරීමේ වේගය වැඩි වන paranමස්ථයක් තුළ තාපය/ස්ථාපිත තාපය වැඩි වන්නේ නැත. v↑ → P↓."
        },
    ],

    chemistry: [
        {
            question: "රත්නයේ සංයෝග නිර්odeshය කුමක්ද?",
            options: ["Ag", "Fe", "Au", "Cu"],
            correct: 2,
            explanation: "Au ලතින් වචනය 'aurum' අර්ථය රත්නය. එබැවින් Au ලෙසින් නියම කරයි."
        },
        {
            question: "25°C දී ශුද්ධ ජලයේ pH අගය කුමක්ද?",
            options: ["5", "7", "9", "11"],
            correct: 1,
            explanation: "ශුද්ධ ජලය නිතර තත්ත්වයෙන් (neutral) වේ. එහි pH = 7"
        },
        {
            question: "පෘථිවියේ වාතයේ සංඛ්‍යාත්මක ලෙස වැඩිම වැඩි සහ ගෑස්ථ ගෝලය කුමක්ද?",
            options: ["ඔක්සිජන්", "කාබන් ඩයොක්සයිඩ්", "නයිට්‍රජන්", "අර්ගොන්"],
            correct: 2,
            explanation: "නයිට්‍රජන් පෘථිවියේ වාතයෙන් ආසන්න වශයෙන් 78% නිපද වේ. එය වැඩිම සංඛ්‍යාත්මක ගෝලයයි."
        },
        {
            question: "අනමෙටල් අතර සාදනීය බන්ධනය කුමක්ද?",
            options: ["අයනික බන්ධනය", "මෙටලික් බන්ධනය", "කොවැලන්ට් බන්ධනය", "හයිඩ්රජන් බන්ධනය"],
            correct: 2,
            explanation: "අනමෙටල් අතර විකිර්ණ කාර්යයන් (electrons) හුවමාරු කර බන්ධනයක් සාදයි. එය කොවැලන්ට් බන්ධනය ලෙස හැඳින්වේ."
        },
        {
            question: "ජලයේ (H₂O) මෝලර බර කුමක්ද?",
            options: ["16 g/mol", "18 g/mol", "20 g/mol", "22 g/mol"],
            correct: 1,
            explanation: "H₂O: 2(1) + 16 = 18. හයිඩ්රජන් අණුකයේ බර = 1, ඔක්සිජන් අණුකයේ බර = 16"
        },
        {
            question: "'K' ලෙසින් නියම කළ පරිමාණය කුමක්ද?",
            options: ["පොටෑසියම්", "ජෝස්පරස්", "ක්‍රිප්ටොන්", "කැල්සියම්"],
            correct: 0,
            explanation: "K ලතින් වචනය 'kalium' අර්ථය පොටෑසියම්. එබැවින් K ලෙසින් නියම කරයි."
        },
        {
            question: "ද්‍රව තත්වයෙන් vapor වන process එක වෙනම කුමක්ද?",
            options: ["ද්‍රවීකරණය", "හිමකිරීම", "වේෂ්පීකරණය", "තාපවidesing"],
            correct: 2,
            explanation: "වේෂ්පීකරණය (vaporization) යනු ද්‍රව තත්වයෙන් vapor වන පරිවර්තනය වේ. එහිදී තාපය ගැනීමක් සිදුවේ."
        },
        {
            question: "අඹ තුළ ඇති අම්ලය කුමක්ද?",
            options: ["අසෙටික් අම්ලය", "සිට්‍රික් අම්ලය", "ලැක්ටික් අම්ලය", "හයිඩ්‍රොක්ලෝරික් අම්ලය"],
            correct: 1,
            explanation: "සිට්‍රික් අම්ලය සිත්‍රස් පලතුරුවලට ඒකයේ පැහැය ලබාදෙයි. එය ප්‍රධාන කාර්යක්ෂමතාවයක් අටවේ."
        },
        {
            question: "කාබන්යන්ගේ අංකය (atomic number) කුමක්ද?",
            options: ["4", "6", "8", "12"],
            correct: 1,
            explanation: "කාබන්යන්ට ප්‍රොටෝනයන් 6 ක් ඇත. අංකය (atomic number) ප්‍රොටෝන ගණනට සමාන වේ."
        },
        {
            question: "පැළෑටු වැනි කාර්යයන් තුළ carbon dioxide නිපදවන ගෝලය කුමක්ද?",
            options: ["ඔක්සිජන්", "නයිට්‍රජන්", "කාබන් ඩයොක්සයිඩ්", "හයිඩ්රජන්"],
            correct: 2,
            explanation: "පැළෑටු කාර්යයන් (organisms) කාබන් ඩයොක්සයිඩ් ග්ලූකෝස් සහ ඔක්සිජන් නිපදවයි. එහිදී ඒවායේ CO₂ ග්ලූකෝස් වෙනුවට පරිවර්තනය වේ."
        },
        // 11. Chemical formula of water
        {
            question: "ජලයේ රසායනික සූත්‍රය කුමක්ද?",
            options: ["H₂O", "CO₂", "O₂", "H₂O₂"],
            correct: 0,
            explanation: "ජලයේ රසායනික සූත්‍රය H₂O වේ. එය හයිඩ්රජන් අණු 2ක් සහ ඔක්සිජන් අණු 1ක් සමග සම්බන්ධ වීමෙන් නිපදවයි."
        },
        // 12. Balanced equation for photosynthesis
        {
            question: "සණ්දුශාස්ත्रයේ සමතුලිත සමීකරණය කුමක්ද?",
            options: [
                "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂",
                "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O",
                "6CO₂ + 6O₂ → C₆H₁₂O₆ + 6H₂O",
                "C₆H₁₂O₆ → 6CO₂ + 6H₂O"
            ],
            correct: 0,
            explanation: "සණ්දුශාස්ත್ರයේ සමතුලිත සමීකරණය: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. එහිදී carbon dioxide සහ water භාවිතා කර glucose සහ oxygen නිපදවයි."
        },
        // 13. Periodic table group for alkali metals
        {
            question: "අල්කලි මෙටල් ග්‍රූපය කුමක්ද?",
            options: ["Group 1", "Group 2", "Group 17", "Group 18"],
            correct: 0,
            explanation: "අල්කලි මෙටල් (Lithium, Sodium, Potassium) Periodic Table එකේ Group 1 වේ. ඒවා ඉතා ක්‍රියාශීලී සහ අධික එම නියැActinides ලක්ෂණ දරයි."
        },
        // 14. Noble gases
        {
            question: "අස්ථිර වාතය (Noble gases) ග්‍රූපය කුමක්ද?",
            options: ["Group 1", "Group 2", "Group 18", "Group 17"],
            correct: 2,
            explanation: "අස්ථිර වාතය (Noble gases) Group 18 වේ. ඒවාට Helium, Neon, Argon, Krypton, Xenon, Radon යන අණු ඇත. ඒවා සාමාන්‍යයෙන් අතිශය නිශ්චල වේ."
        },
        // 15. Chemical reaction types - combustion
        {
            question: "දාහනය (Combustion) යනු කුමක්ද?",
            options: [
                "Fuel + O₂ → CO₂ + H₂O + heat",
                "AB → A + B",
                "A + B → AB",
                "Acid + Base → Salt + Water"
            ],
            correct: 0,
            explanation: "දාහනය යනු fuel (ප්‍රධාන වශයෙන් hydrocarbons) ගැනීමෙන් carbon dioxide සහ water නිපදවන පරිවර්තනයකි. එය තාපය නිපදවයි."
        },
        // 16. Acid-base reaction product
        {
            question: "අම්ල-භාස අතර ප්‍රතික්‍රියාවෙන් නිපදවන ද්‍රව්‍ය දෙක මොනවාද?",
            options: ["Salt සහ Water", "CO₂ සහ H₂O", "H₂ සහ O₂", "Acid සහ Base"],
            correct: 0,
            explanation: "අම්ල-භාස ප්‍රතික්‍රියාවෙන් Salt (ලවණය) සහ Water (ජලය) නිපදවයි. Neutralization reaction ලෙස හැඳින්වේ."
        },
        // 17. pH of strong base
        {
            question: "බලවත් භාසයක් (strong base) හි pH විශාලය කුමක්ද?",
            options: ["7 සිට 14", "0 සිට 6", "3 සිට 5", "1 සිට 3"],
            correct: 0,
            explanation: "භාස minerals pH > 7. බලවත් භාස (NaOH, KOH) pH 14 හෝ 14ට ආසන්න වේ. අම්ල කෙටි pH < 7, නිතර 7."
        },
        // 18. Molar volume at STP
        {
            question: "STP (Standard Temperature & Pressure) තුළ 1 mole ගාස් එකේ පරිමාණය කුමක්ද?",
            options: ["22.4 L", "22.4 cm³", "22.4 mL", "22.4 m³"],
            correct: 0,
            explanation: "STP (0°C, 1 atm) තුළ 1 mole ගාස් එකේ molar volume එක 22.4 L (liters) වේ. Ideal gas law අනුව."
        },
        // 19. IUPAC full form
        {
            question: "IUPAC යනු කුමක්ද?",
            options: [
                "International Union of Pure and Applied Chemistry",
                "Indian United Practical Applied Chemistry",
                "Inter University Physics and Chemistry",
                "International Unit of Pure Applied Chemistry"
            ],
            correct: 0,
            explanation: "IUPAC යනු International Union of Pure and Applied Chemistry වේ. එය රසායනික නාමයන්, සමීකරණ සහ මාර්ගෝපදේශ සකස් කරන සංවිධානයයි."
        },
        // 20. Electrolysis
        {
            question: "විද්‍යුත්ජ ජීවාකරණය (Electrolysis) යනු කුමක්ද?",
            options: [
                "ද්‍රවයක් හෝ ද්‍රාවණයක් ජීවාකරණය කිරීම",
                "Chemical energy → Electrical energy",
                "Electrical energy → Chemical energy",
                "Heat → Electrical energy"
            ],
            correct: 2,
            explanation: "විද්‍යුත්ජ ජීවාකරණය යනු electrical energy භාවිතා කර chemical change එකක් සිදු කිරීමයි. Electrolytic cell එකේදී ක්‍රියාත්මක වේ."
        },
        // 21. Oxidation definition
        {
            question: "ඔක්සිදීකරණය (Oxidation) යනු කුමක්ද?",
            options: [
                "Electron gain",
                "Electron loss",
                "Hydrogen gain",
                "Oxygen loss"
            ],
            correct: 1,
            explanation: "ඔක්සිදීකරණය යනු electron නැතිවීම (electron loss) වේ. Oxidation number එක වැඩි වීම. LE0 අනුව: Oxidation = Loss."
        },
        // 22. Reduction definition
        {
            question: "අපචයනය (Reduction) යනු කුමක්ද?",
            options: [
                "Electron loss",
                "Electron gain",
                "Oxygen gain",
                "Hydrogen loss"
            ],
            correct: 1,
            explanation: "අපචයනය යනු electron ගැනීම (electron gain) වේ. Oxidation number එක අඩු වීම. LE0 අනුව: Reduction = Gain."
        },
        // 23. Catalyst
        {
            question: "ජීවාක (catalyst) යනු කුමක්ද?",
            options: [
                "Reaction rate වැඩි කරන ද්‍රව්‍ය",
                "Reaction rate අඩු කරන ද්‍රව්‍ය",
                "Chemical change නොවන එක් එක් ප්‍රතික්‍රියාව",
                "Chemical equilibrium වෙනස් කරන ද්‍රව්‍ය"
            ],
            correct: 0,
            explanation: "ජීවාක යනු reaction rate වැඩි කරන එක් එක් ද්‍රව්‍යයි. එය reaction එකේම හැකියාව වැඩි කරයි, හෝ equilibrium නැති කරයි. හෝ reaction down."
        },
        // 24. Alloy
        {
            question: "මිශ්‍ර ධාතුව (Alloy) යනු කුමක්ද?",
            options: [
                "Metal අතර සම්බන්ධවන සංයෝජන ද්‍රව්‍ය",
                "Metal සහ non-metal සංයෝජනය",
                "පිරිවිතර ද්‍රව්‍ය සංකුලනය",
                "අනුලෝමයෙන් පුරුද්ධ ධාතු"
            ],
            correct: 0,
            explanation: "මිශ්‍ර ධාතුව (Alloy) යනු metals දෙක හෝ වැඩි මිශ්‍රණයක් සමග සම්බන්ධවන ද්‍රව්‍යයි. උදා: Brass (Copper+Zinc), Steel (Iron+Carbon)."
        },
        // 25. Polymer
        {
            question: "පොලිමරය (Polymer) යනු කුමක්ද?",
            options: [
                "කොටස් විශාල අණු අතර සංයොජනය",
                "කොටස් කුඩා අණු සංයෝජනය",
                "සෑම අණුවක් සමාන අණු",
                "Monomer නැති අණු"
            ],
            correct: 0,
            explanation: "පොලිමරය (Polymer) යනු monomers (කුඩා අණු) ගණනක් එකට සම්බන්ධවීමෙන් සිදුවන දිගු සංයෝජන ද්‍රව්‍යයි. උදා: Plastic, DNA, Proteins."
        },
        // 26. Homogeneous mixture
        {
            question: "සමූහගත මिश්‍රණය (Homogeneous mixture) යනු කුමක්ද?",
            options: [
                "එක් සංකීර්ණ ද්‍රව්‍ය, සම්පූර්ණ අංශු නොමැති",
                "අංශු දක්වා නැති",
                "දෙවැනි අණු නැති",
                "සමාන පරිමාණය අණු"
            ],
            correct: 0,
            explanation: "සමූහගත මිශ්‍රණය (Homogeneous mixture) යනු එක් සංකීර්ණ ද්‍රව්යක් වේ. එහි අංශු නොපෙනීම. උදා: Salt solution, Air, Alloy."
        },
        // 27. Heterogeneous mixture
        {
            question: "විශිෂ්ටතර මිශ්‍රණය (Heterogeneous mixture) යනු කුමක්ද?",
            options: [
                "අංශු පැහැදිලිව පෙනෙන මිශ්‍රණය",
                "ද්‍රව්‍යක් සම්පූර්ණයෙන්ම අංශු නැති",
                "ද්‍රව්‍ය නැති",
                "සමාන පරිමාණය අණු"
            ],
            correct: 0,
            explanation: "විශිෂ්ටතර මිශ්‍රණය (Heterogeneous mixture) යනු අංශු පැහැදිලිව පෙනෙන මිශ්‍රණයයි. උදා: Sand in water, Salad, Concrete."
        },
        // 28. Covalent bond
        {
            question: "සහයෝගක බන්ධනය (Covalent bond) යනු කුමක්ද?",
            options: [
                "Electrons share කිරීම",
                "Electrons transfer කිරීම",
                "Electrons destroy කිරීම",
                "Electrons ignore කිරීම"
            ],
            correct: 0,
            explanation: "සහයෝගක බන්ධනය යනු non-metals අතර electrons share කිරීමයි. එය molecule එකක් සිදු කරයි. H2, O2, H2O උදාහරණ."
        },
        // 29. Ionic bond
        {
            question: "අයනික් බන්ධනය (Ionic bond) යනු කුමක්ද?",
            options: [
                "Electrons transfer කිරීම",
                "Electrons share කිරීම",
                "Electrons equal distribution",
                "Electrons sharing half"
            ],
            correct: 0,
            explanation: "අයනික් බන්ධනය යනු metal සහ non-metal අතර electrons transfer කිරීමයි. Electrostatic attraction මගින් ions සමග බන්ධනය. NaCl උදා."
        },
        // 30. pH scale range
        {
            question: "pH scale එකේ සීමා කිහිපය?(range)",
            options: ["0-14", "1-10", "0-7", "7-14"],
            correct: 0,
            explanation: "pH scale එක 0 සිට 14 දක්වා පැතිරී ඇත. 7 නිතර, හොඳින් 7 අම්ල, 7 සිට 14 භාස. අතිශය අම්ල pH 0, අතිශය භාස pH 14."
        }
    ]
};
