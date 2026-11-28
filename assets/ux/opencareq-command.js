/* ==========================================================================
   OpenCareQ v4.7.0 — Global Spotlight Command Palette, 115-Crystal Theater
   Controller, Hero Quantum Lattice Canvas & Cross-Portal Deep-Link Engine
   (`assets/ux/opencareq-command.js` · Zero External Dependencies · phi_present = False)
   ========================================================================== */
(function () {
  "use strict";

  const OCQ_PDB_INDEX = [{"n": 1, "key": "1h7x", "pdb": "1H7X", "btn": "1 · DPYD [4Fe-4S] (1H7X)", "tag": "PDB: 1H7X", "title": "1 · DPYD [4Fe-4S] (1H7X)", "cats": ["all", "gateg4", "pgx"]}, {"n": 2, "key": "3qm4", "pdb": "3QM4", "btn": "2 · CYP2D6 Heme (3QM4)", "tag": "PDB: 3QM4", "title": "2 · CYP2D6 Heme (3QM4)", "cats": ["all", "gateg4", "pgx"]}, {"n": 3, "key": "4gqs", "pdb": "4GQS", "btn": "3 · CYP2C19 Heme (4GQS)", "tag": "PDB: 4GQS", "title": "3 · CYP2C19 Heme (4GQS)", "cats": ["all", "gateg4", "pgx"]}, {"n": 4, "key": "4rl0", "pdb": "4RL0", "btn": "4 · NDM-1 Meropenem (4RL0)", "tag": "PDB: 4RL0", "title": "4 · NDM-1 Meropenem (4RL0)", "cats": ["all", "gateg4", "pathogen"]}, {"n": 5, "key": "6rmf", "pdb": "6RMF", "btn": "5 · NDM-1 Taniborbactam (6RMF)", "tag": "PDB: 6RMF", "title": "5 · NDM-1 Taniborbactam (6RMF)", "cats": ["all", "gateg4", "pathogen"]}, {"n": 6, "key": "2hbs", "pdb": "2HBS", "btn": "6 · Deoxy-HbS Sickle (2HBS)", "tag": "PDB: 2HBS", "title": "6 · Deoxy-HbS Sickle (2HBS)", "cats": ["all", "gateg4"]}, {"n": 7, "key": "1gzx", "pdb": "1GZX", "btn": "7 · Oxy-Hb Singlet (1GZX)", "tag": "PDB: 1GZX", "title": "7 · Oxy-Hb Singlet (1GZX)", "cats": ["all", "organ"]}, {"n": 8, "key": "3vri", "pdb": "3VRI", "btn": "8 · HLA-B*57/58 Pocket (3VRI)", "tag": "PDB: 3VRI", "title": "8 · HLA-B*57/58 Pocket (3VRI)", "cats": ["all", "pgx"]}, {"n": 9, "key": "6nzp", "pdb": "6NZP", "btn": "9 · TYK2 JH2 -CD3 (6NZP)", "tag": "PDB: 6NZP", "title": "9 · TYK2 JH2 -CD3 (6NZP)", "cats": ["all", "organ"]}, {"n": 10, "key": "5lpg", "pdb": "5LPG", "btn": "10 · NUDT15 Mg²⁺ (5LPG)", "tag": "PDB: 5LPG", "title": "10 · NUDT15 Mg²⁺ (5LPG)", "cats": ["all", "pgx"]}, {"n": 11, "key": "7rfs", "pdb": "7RFS", "btn": "11 · Mpro + Nirmatrelvir (7RFS)", "tag": "PDB: 7RFS", "title": "11 · Mpro + Nirmatrelvir (7RFS)", "cats": ["all", "pathogen"]}, {"n": 12, "key": "3lpv", "pdb": "3LPV", "btn": "12 · Cisplatin DNA (3LPV)", "tag": "PDB: 3LPV", "title": "12 · Cisplatin DNA (3LPV)", "cats": ["all", "organ"]}, {"n": 13, "key": "3bns", "pdb": "3BNS", "btn": "13 · MT-RNR1 m.1555A&gt;G (3BNS)", "tag": "PDB: 3BNS", "title": "13 · MT-RNR1 m.1555A&gt;G (3BNS)", "cats": ["all", "pgx"]}, {"n": 14, "key": "1i10", "pdb": "1I10", "btn": "14 · Human LDHA + NADH (1I10)", "tag": "PDB: 1I10", "title": "14 · Human LDHA + NADH (1I10)", "cats": ["all", "organ"]}, {"n": 15, "key": "2vue", "pdb": "2VUE", "btn": "15 · HSA + Bilirubin (2VUE)", "tag": "PDB: 2VUE", "title": "15 · HSA + Bilirubin (2VUE)", "cats": ["all", "organ"]}, {"n": 16, "key": "2hre", "pdb": "2HRE", "btn": "16 · Human FECH + PpIX (2HRE)", "tag": "PDB: 2HRE", "title": "16 · Human FECH + PpIX (2HRE)", "cats": ["all", "gateg4"]}, {"n": 17, "key": "8a6e", "pdb": "8A6E", "btn": "17 · 100 ps XFEL Rhodopsin (8A6E)", "tag": "PDB: 8A6E", "title": "17 · 100 ps XFEL Rhodopsin (8A6E)", "cats": ["all", "organ"]}, {"n": 18, "key": "4udc", "pdb": "4UDC", "btn": "18 · Human GR + DEX (4UDC)", "tag": "PDB: 4UDC", "title": "18 · Human GR + DEX (4UDC)", "cats": ["all", "pgx"]}, {"n": 19, "key": "5j13", "pdb": "5J13", "btn": "19 · TSLP + Tezepelumab (5J13)", "tag": "PDB: 5J13", "title": "19 · TSLP + Tezepelumab (5J13)", "cats": ["all", "organ"]}, {"n": 20, "key": "7vsi", "pdb": "7VSI", "btn": "20 · Human SGLT2 + Empa (7VSI)", "tag": "PDB: 7VSI", "title": "20 · Human SGLT2 + Empa (7VSI)", "cats": ["all", "pgx"]}, {"n": 21, "key": "4zgm", "pdb": "4ZGM", "btn": "21 · GLP-1R + Semaglutide (4ZGM)", "tag": "PDB: 4ZGM", "title": "21 · GLP-1R + Semaglutide (4ZGM)", "cats": ["all", "organ"]}, {"n": 22, "key": "4pf3", "pdb": "4PF3", "btn": "22 · NR3C2 + ns-MRA 1.10Å (4PF3)", "tag": "PDB: 4PF3", "title": "22 · NR3C2 + ns-MRA 1.10Å (4PF3)", "cats": ["all", "organ"]}, {"n": 23, "key": "5jmy", "pdb": "5JMY", "btn": "23 · Neprilysin Zn²⁺ + LBQ657 (5JMY)", "tag": "PDB: 5JMY", "title": "23 · Neprilysin Zn²⁺ + LBQ657 (5JMY)", "cats": ["all", "organ"]}, {"n": 24, "key": "2p16", "pdb": "2P16", "btn": "24 · Factor Xa + Apixaban (2P16)", "tag": "PDB: 2P16", "title": "24 · Factor Xa + Apixaban (2P16)", "cats": ["all", "pgx"]}, {"n": 25, "key": "1o9s", "pdb": "1O9S", "btn": "25 · SETD7 + SAH Legacy (1O9S)", "tag": "PDB: 1O9S", "title": "25 · SETD7 + SAH Legacy (1O9S)", "cats": ["all", "organ"]}, {"n": 26, "key": "4ey7", "pdb": "4EY7", "btn": "26 · Human AChE + Donepezil (4EY7)", "tag": "PDB: 4EY7", "title": "26 · Human AChE + Donepezil (4EY7)", "cats": ["all", "organ"]}, {"n": 27, "key": "4d1o", "pdb": "4D1O", "btn": "27 · Human eNOS + BH4 (4D1O)", "tag": "PDB: 4D1O", "title": "27 · Human eNOS + BH4 (4D1O)", "cats": ["all", "gateg4"]}, {"n": 28, "key": "4i6g", "pdb": "4I6G", "btn": "28 · Mammalian CRY2 + FAD (4I6G)", "tag": "PDB: 4I6G", "title": "28 · Mammalian CRY2 + FAD (4I6G)", "cats": ["all", "organ"]}, {"n": 29, "key": "5vf9", "pdb": "5VF9", "btn": "29 · Human SOD2 Mn (5VF9)", "tag": "PDB: 5VF9", "title": "29 · Human SOD2 Mn (5VF9)", "cats": ["all", "gateg4"]}, {"n": 30, "key": "1n45", "pdb": "1N45", "btn": "30 · Human HMOX1 + Heme (1N45)", "tag": "PDB: 1N45", "title": "30 · Human HMOX1 + Heme (1N45)", "cats": ["all", "gateg4"]}, {"n": 31, "key": "7aai", "pdb": "7AAI", "btn": "31 · Human HSA + PFOA (7AAI)", "tag": "PDB: 7AAI", "title": "31 · Human HSA + PFOA (7AAI)", "cats": ["all", "organ"]}, {"n": 32, "key": "1qnv", "pdb": "1QNV", "btn": "32 · ALAD + Pb²⁺ 6s² (1QNV)", "tag": "PDB: 1QNV", "title": "32 · ALAD + Pb²⁺ 6s² (1QNV)", "cats": ["all", "gateg4"]}, {"n": 33, "key": "2w3m", "pdb": "2W3M", "btn": "33 · Human DHFR + Folate (2W3M)", "tag": "PDB: 2W3M", "title": "33 · Human DHFR + Folate (2W3M)", "cats": ["all", "pgx"]}, {"n": 34, "key": "6fcx", "pdb": "6FCX", "btn": "34 · Human MTHFR + FAD (6FCX)", "tag": "PDB: 6FCX", "title": "34 · Human MTHFR + FAD (6FCX)", "cats": ["all", "pgx"]}, {"n": 35, "key": "4lxz", "pdb": "4LXZ", "btn": "35 · Human HDAC2 + Zn²⁺ (4LXZ)", "tag": "PDB: 4LXZ", "title": "35 · Human HDAC2 + Zn²⁺ (4LXZ)", "cats": ["all", "organ"]}, {"n": 36, "key": "1db1", "pdb": "1DB1", "btn": "36 · Human VDR + Calcitriol (1DB1)", "tag": "PDB: 1DB1", "title": "36 · Human VDR + Calcitriol (1DB1)", "cats": ["all", "organ"]}, {"n": 37, "key": "3c6g", "pdb": "3C6G", "btn": "37 · Human CYP2R1 + VitD3 (3C6G)", "tag": "PDB: 3C6G", "title": "37 · Human CYP2R1 + VitD3 (3C6G)", "cats": ["all", "organ"]}, {"n": 38, "key": "1zw5", "pdb": "1ZW5", "btn": "38 · Human FPPS + [Mg²⁺]₃ + ZOL (1ZW5)", "tag": "PDB: 1ZW5", "title": "38 · Human FPPS + [Mg²⁺]₃ + ZOL (1ZW5)", "cats": ["all", "organ"]}, {"n": 39, "key": "3urf", "pdb": "3URF", "btn": "39 · Human RANKL–OPG (3URF)", "tag": "PDB: 3URF", "title": "39 · Human RANKL–OPG (3URF)", "cats": ["all", "organ"]}, {"n": 40, "key": "1atk", "pdb": "1ATK", "btn": "40 · Human Cathepsin K + E-64 (1ATK)", "tag": "PDB: 1ATK", "title": "40 · Human Cathepsin K + E-64 (1ATK)", "cats": ["all", "organ"]}, {"n": 41, "key": "5c6b", "pdb": "5C6B", "btn": "41 · Prefusion RSV F SC-TM (5C6B)", "tag": "PDB: 5C6B", "title": "41 · Prefusion RSV F SC-TM (5C6B)", "cats": ["all", "pathogen"]}, {"n": 42, "key": "3fjt", "pdb": "3FJT", "btn": "42 · Human IgG1-Fc YTE (3FJT)", "tag": "PDB: 3FJT", "title": "42 · Human IgG1-Fc YTE (3FJT)", "cats": ["all", "pathogen"]}, {"n": 43, "key": "4xr8", "pdb": "4XR8", "btn": "43 · HPV16 E6 + Human p53 (4XR8)", "tag": "PDB: 4XR8", "title": "43 · HPV16 E6 + Human p53 (4XR8)", "cats": ["all", "pathogen"]}, {"n": 44, "key": "1ipc", "pdb": "1IPC", "btn": "44 · Human eIF4E + m⁷GTP (1IPC)", "tag": "PDB: 1IPC", "title": "44 · Human eIF4E + m⁷GTP (1IPC)", "cats": ["all", "pathogen"]}, {"n": 45, "key": "4r07", "pdb": "4R07", "btn": "45 · Human TLR8 + Uridine (4R07)", "tag": "PDB: 4R07", "title": "45 · Human TLR8 + Uridine (4R07)", "cats": ["all", "pathogen"]}, {"n": 46, "key": "2b3y", "pdb": "2B3Y", "btn": "46 · Human IRP1 [4Fe-4S]²⁺ (2B3Y)", "tag": "PDB: 2B3Y", "title": "46 · Human IRP1 [4Fe-4S]²⁺ (2B3Y)", "cats": ["all", "gateg4"]}, {"n": 47, "key": "3h0t", "pdb": "3H0T", "btn": "47 · Human Hepcidin-25 (3H0T)", "tag": "PDB: 3H0T", "title": "47 · Human Hepcidin-25 (3H0T)", "cats": ["all", "organ"]}, {"n": 48, "key": "1gwr", "pdb": "1GWR", "btn": "48 · Human ERα + Estradiol LBHB (1GWR)", "tag": "PDB: 1GWR", "title": "48 · Human ERα + Estradiol LBHB (1GWR)", "cats": ["all", "organ"]}, {"n": 49, "key": "6hlp", "pdb": "6HLP", "btn": "49 · Human Neurokinin Receptor (6HLP)", "tag": "PDB: 6HLP", "title": "49 · Human Neurokinin Receptor (6HLP)", "cats": ["all", "organ"]}, {"n": 50, "key": "5ikr", "pdb": "5IKR", "btn": "50 · Human COX-2 + Mefenamic (5IKR)", "tag": "PDB: 5IKR", "title": "50 · Human COX-2 + Mefenamic (5IKR)", "cats": ["all", "organ"]}, {"n": 51, "key": "4afg", "pdb": "4AFG", "btn": "51 · nAChR AChBP + Varenicline (4AFG)", "tag": "PDB: 4AFG", "title": "51 · nAChR AChBP + Varenicline (4AFG)", "cats": ["all", "organ"]}, {"n": 52, "key": "4ejj", "pdb": "4EJJ", "btn": "52 · Human CYP2A6 + Nicotine (4EJJ)", "tag": "PDB: 4EJJ", "title": "52 · Human CYP2A6 + Nicotine (4EJJ)", "cats": ["all", "pgx"]}, {"n": 53, "key": "1o01", "pdb": "1O01", "btn": "53 · Human ALDH2 + NAD⁺ (1O01)", "tag": "PDB: 1O01", "title": "53 · Human ALDH2 + NAD⁺ (1O01)", "cats": ["all", "pgx"]}, {"n": 54, "key": "3mos", "pdb": "3MOS", "btn": "54 · Human Transketolase + ThDP (3MOS)", "tag": "PDB: 3MOS", "title": "54 · Human Transketolase + ThDP (3MOS)", "cats": ["all", "organ"]}, {"n": 55, "key": "4n6h", "pdb": "4N6H", "btn": "55 · Human Opioid 7TM + Na⁺ (4N6H)", "tag": "PDB: 4N6H", "title": "55 · Human Opioid 7TM + Na⁺ (4N6H)", "cats": ["all", "organ"]}, {"n": 56, "key": "6i9a", "pdb": "6I9A", "btn": "56 · P. gingivalis Gingipain K (6I9A)", "tag": "PDB: 6I9A", "title": "56 · P. gingivalis Gingipain K (6I9A)", "cats": ["all", "pathogen"]}, {"n": 57, "key": "3iox", "pdb": "3IOX", "btn": "57 · S. mutans AgI/II Enamel (3IOX)", "tag": "PDB: 3IOX", "title": "57 · S. mutans AgI/II Enamel (3IOX)", "cats": ["all", "pathogen"]}, {"n": 58, "key": "5wqc", "pdb": "5WQC", "btn": "58 · Human Orexin OX2R (5WQC)", "tag": "PDB: 5WQC", "title": "58 · Human Orexin OX2R (5WQC)", "cats": ["all", "organ"]}, {"n": 59, "key": "2g19", "pdb": "2G19", "btn": "59 · Human PHD2 + Fe²⁺ (2G19)", "tag": "PDB: 2G19", "title": "59 · Human PHD2 + Fe²⁺ (2G19)", "cats": ["all", "gateg4"]}, {"n": 60, "key": "6zho", "pdb": "6ZHO", "btn": "60 · Human CGRP + Gepant (6ZHO)", "tag": "PDB: 6ZHO", "title": "60 · Human CGRP + Gepant (6ZHO)", "cats": ["all", "organ"]}, {"n": 61, "key": "2h79", "pdb": "2H79", "btn": "61 · Human TRα + T3 (2H79)", "tag": "PDB: 2H79", "title": "61 · Human TRα + T3 (2H79)", "cats": ["all", "organ"]}, {"n": 62, "key": "4tr3", "pdb": "4TR3", "btn": "62 · Mammalian DIO3 Deiodinase (4TR3)", "tag": "PDB: 4TR3", "title": "62 · Mammalian DIO3 Deiodinase (4TR3)", "cats": ["all", "organ"]}, {"n": 63, "key": "3bdj", "pdb": "3BDJ", "btn": "63 · XOR + Oxypurinol Gout (3BDJ)", "tag": "PDB: 3BDJ", "title": "63 · XOR + Oxypurinol Gout (3BDJ)", "cats": ["all", "gateg4", "pgx"]}, {"n": 64, "key": "6zja", "pdb": "6ZJA", "btn": "64 · H. pylori [Ni²⁺]₂ Urease (6ZJA)", "tag": "PDB: 6ZJA", "title": "64 · H. pylori [Ni²⁺]₂ Urease (6ZJA)", "cats": ["all", "gateg4", "pathogen"]}, {"n": 65, "key": "1qrp", "pdb": "1QRP", "btn": "65 · Human Pepsin 3A (1QRP)", "tag": "PDB: 1QRP", "title": "65 · Human Pepsin 3A (1QRP)", "cats": ["all", "organ"]}, {"n": 66, "key": "1yki", "pdb": "1YKI", "btn": "66 · E. coli NfsB + Nitrofuran (1YKI)", "tag": "PDB: 1YKI", "title": "66 · E. coli NfsB + Nitrofuran (1YKI)", "cats": ["all", "pathogen"]}, {"n": 67, "key": "4av5", "pdb": "4AV5", "btn": "67 · UPEC FimH + Mannoside (4AV5)", "tag": "PDB: 4AV5", "title": "67 · UPEC FimH + Mannoside (4AV5)", "cats": ["all", "pathogen"]}, {"n": 68, "key": "6bc9", "pdb": "6BC9", "btn": "68 · Neutron hCA II + Dorzolamide! (6BC9)", "tag": "PDB: 6BC9", "title": "68 · Neutron hCA II + Dorzolamide! (6BC9)", "cats": ["all", "gateg4"]}, {"n": 69, "key": "3kvc", "pdb": "3KVC", "btn": "69 · Retinal RPE65 + Fe²⁺ (3KVC)", "tag": "PDB: 3KVC", "title": "69 · Retinal RPE65 + Fe²⁺ (3KVC)", "cats": ["all", "organ"]}, {"n": 70, "key": "1k4c", "pdb": "1K4C", "btn": "70 · Nobel KcsA Filter #70! (1K4C)", "tag": "PDB: 1K4C", "title": "70 · Nobel KcsA Filter #70! (1K4C)", "cats": ["all", "organ"]}, {"n": 71, "key": "1fqg", "pdb": "1FQG", "btn": "71 · Penicillin G + PBP/TEM-1 (1FQG)", "tag": "PDB: 1FQG", "title": "71 · Penicillin G + PBP/TEM-1 (1FQG)", "cats": ["all", "pathogen"]}, {"n": 72, "key": "2ki5", "pdb": "2KI5", "btn": "72 · HSV-1 TK + Aciclovir (2KI5)", "tag": "PDB: 2KI5", "title": "72 · HSV-1 TK + Aciclovir (2KI5)", "cats": ["all", "pathogen"]}, {"n": 73, "key": "9gns", "pdb": "9GNS", "btn": "73 · Human AADC + Carbidopa (9GNS)", "tag": "PDB: 9GNS", "title": "73 · Human AADC + Carbidopa (9GNS)", "cats": ["all", "organ"]}, {"n": 74, "key": "3bwm", "pdb": "3BWM", "btn": "74 · Human S-COMT + Mg²⁺ (3BWM)", "tag": "PDB: 3BWM", "title": "74 · Human S-COMT + Mg²⁺ (3BWM)", "cats": ["all", "organ"]}, {"n": 75, "key": "6wr1", "pdb": "6WR1", "btn": "75 · CYP17A1 + Abiraterone #75 (6WR1)", "tag": "PDB: 6WR1", "title": "75 · CYP17A1 + Abiraterone #75 (6WR1)", "cats": ["all", "gateg4", "pgx"]}, {"n": 76, "key": "1dnu", "pdb": "1DNU", "btn": "76 · Human MPO Sulfonium-Heme 15.3 ZiB! (1DNU)", "tag": "PDB: 1DNU", "title": "76 · Human MPO Sulfonium-Heme 15.3 ZiB! (1DNU)", "cats": ["all", "gateg4"]}, {"n": 77, "key": "4mpw", "pdb": "4MPW", "btn": "77 · Mast-Cell β-Tryptase + 2AJ (4MPW)", "tag": "PDB: 4MPW", "title": "77 · Mast-Cell β-Tryptase + 2AJ (4MPW)", "cats": ["all", "organ"]}, {"n": 78, "key": "1u72", "pdb": "1U72", "btn": "78 · Human DHFR + Methotrexate (1U72)", "tag": "PDB: 1U72", "title": "78 · Human DHFR + Methotrexate (1U72)", "cats": ["all", "pgx"]}, {"n": 79, "key": "4ggf", "pdb": "4GGF", "btn": "79 · Human Calprotectin + Mn²⁺ (4GGF)", "tag": "PDB: 4GGF", "title": "79 · Human Calprotectin + Mn²⁺ (4GGF)", "cats": ["all", "organ"]}, {"n": 80, "key": "10qv", "pdb": "10QV", "btn": "80 · Human NQO1 + (S)-Warfarin #80! (10QV)", "tag": "PDB: 10QV", "title": "80 · Human NQO1 + (S)-Warfarin #80! (10QV)", "cats": ["all", "pgx"]}, {"n": 81, "key": "1o86", "pdb": "1O86", "btn": "81 · Human ACE + Lisinopril (1O86)", "tag": "PDB: 1O86", "title": "81 · Human ACE + Lisinopril (1O86)", "cats": ["all", "organ"]}, {"n": 82, "key": "4oyn", "pdb": "4OYN", "btn": "82 · Heart H-Ferritin 233.6 ZiB! (4OYN)", "tag": "PDB: 4OYN", "title": "82 · Heart H-Ferritin 233.6 ZiB! (4OYN)", "cats": ["all", "gateg4"]}, {"n": 83, "key": "1tbf", "pdb": "1TBF", "btn": "83 · Human PDE5A + Sildenafil 1.30 Å (1TBF)", "tag": "PDB: 1TBF", "title": "83 · Human PDE5A + Sildenafil 1.30 Å (1TBF)", "cats": ["all", "organ"]}, {"n": 84, "key": "1ijb", "pdb": "1IJB", "btn": "84 · Human VWF A1 Shear Sensor (1IJB)", "tag": "PDB: 1IJB", "title": "84 · Human VWF A1 Shear Sensor (1IJB)", "cats": ["all", "organ"]}, {"n": 85, "key": "1ppb", "pdb": "1PPB", "btn": "85 · Human α-Thrombin + PPACK #85! (1PPB)", "tag": "PDB: 1PPB", "title": "85 · Human α-Thrombin + PPACK #85! (1PPB)", "cats": ["all", "organ"]}, {"n": 86, "key": "4d1p", "pdb": "4D1P", "btn": "86 · Human eNOS 3.49 YiB! (4D1P)", "tag": "PDB: 4D1P", "title": "86 · Human eNOS 3.49 YiB! (4D1P)", "cats": ["all", "gateg4"]}, {"n": 87, "key": "2ab2", "pdb": "2AB2", "btn": "87 · Human MR + Spironolactone (2AB2)", "tag": "PDB: 2AB2", "title": "87 · Human MR + Spironolactone (2AB2)", "cats": ["all", "organ"]}, {"n": 88, "key": "3ccz", "pdb": "3CCZ", "btn": "88 · Human HMGCR + Atorvastatin (3CCZ)", "tag": "PDB: 3CCZ", "title": "88 · Human HMGCR + Atorvastatin (3CCZ)", "cats": ["all", "pgx"]}, {"n": 89, "key": "6hl1", "pdb": "6HL1", "btn": "89 · Human FXR + MASH Agonist (6HL1)", "tag": "PDB: 6HL1", "title": "89 · Human FXR + MASH Agonist (6HL1)", "cats": ["all", "organ"]}, {"n": 90, "key": "5j41", "pdb": "5J41", "btn": "90 · Human GSTP1 + GSH 1.19 Å #90! (5J41)", "tag": "PDB: 5J41", "title": "90 · Human GSTP1 + GSH 1.19 Å #90! (5J41)", "cats": ["all", "pgx"]}, {"n": 91, "key": "1dgf", "pdb": "1DGF", "btn": "91 · Human Catalase 53.61 YiB! (1DGF)", "tag": "PDB: 1DGF", "title": "91 · Human Catalase 53.61 YiB! (1DGF)", "cats": ["all", "gateg4"]}, {"n": 92, "key": "4al0", "pdb": "4AL0", "btn": "92 · Human mPGES-1 + GSH 1.16 Å (4AL0)", "tag": "PDB: 4AL0", "title": "92 · Human mPGES-1 + GSH 1.16 Å (4AL0)", "cats": ["all", "organ"]}, {"n": 93, "key": "6esm", "pdb": "6ESM", "btn": "93 · Human MMP-9 + Zn²⁺ 1.104 Å (6ESM)", "tag": "PDB: 6ESM", "title": "93 · Human MMP-9 + Zn²⁺ 1.104 Å (6ESM)", "cats": ["all", "organ"]}, {"n": 94, "key": "6b1e", "pdb": "6B1E", "btn": "94 · Human DPP-4 + Vildagliptin (6B1E)", "tag": "PDB: 6B1E", "title": "94 · Human DPP-4 + Vildagliptin (6B1E)", "cats": ["all", "organ"]}, {"n": 95, "key": "1us0", "pdb": "1US0", "btn": "95 · Aldose Reductase 0.66 Å #95! (1US0)", "tag": "PDB: 1US0", "title": "95 · Aldose Reductase 0.66 Å #95! (1US0)", "cats": ["all", "subangstrom"]}, {"n": 96, "key": "9fjt", "pdb": "9FJT", "btn": "96 · Human MAO-B + FAD 1.40 Å (9FJT)", "tag": "PDB: 9FJT", "title": "96 · Human MAO-B + FAD 1.40 Å (9FJT)", "cats": ["all", "organ"]}, {"n": 97, "key": "1y93", "pdb": "1Y93", "btn": "97 · Human MMP-12 + Zn²⁺ 1.03 Å! (1Y93)", "tag": "PDB: 1Y93", "title": "97 · Human MMP-12 + Zn²⁺ 1.03 Å! (1Y93)", "cats": ["all", "organ"]}, {"n": 98, "key": "9e3s", "pdb": "9E3S", "btn": "98 · Human PPIA Cyclophilin 1.08 Å! (9E3S)", "tag": "PDB: 9E3S", "title": "98 · Human PPIA Cyclophilin 1.08 Å! (9E3S)", "cats": ["all", "organ"]}, {"n": 99, "key": "4a7u", "pdb": "4A7U", "btn": "99 · Cu₂Zn₂-SOD1 0.98 Å &amp; 12.39 RiB #99! (4A7U)", "tag": "PDB: 4A7U", "title": "99 · Cu₂Zn₂-SOD1 0.98 Å &amp; 12.39 RiB #99! (4A7U)", "cats": ["all", "subangstrom", "gateg4"]}, {"n": 100, "key": "6s2m", "pdb": "6S2M", "btn": "100 · Myelin P2 0.72 Å CENTENNIAL #100!! (6S2M)", "tag": "PDB: 6S2M", "title": "100 · Myelin P2 0.72 Å CENTENNIAL #100!! (6S2M)", "cats": ["all", "subangstrom"]}, {"n": 101, "key": "8tce", "pdb": "8TCE", "btn": "101 · Human Lp(a) Kringle IV-8 1.07 Å! (8TCE)", "tag": "PDB: 8TCE", "title": "101 · Human Lp(a) Kringle IV-8 1.07 Å! (8TCE)", "cats": ["all", "organ"]}, {"n": 102, "key": "9hz3", "pdb": "9HZ3", "btn": "102 · Human PCSK9 + AZD0780 1.43 Å (9HZ3)", "tag": "PDB: 9HZ3", "title": "102 · Human PCSK9 + AZD0780 1.43 Å (9HZ3)", "cats": ["all", "organ"]}, {"n": 103, "key": "7h66", "pdb": "7H66", "btn": "103 · Mast-Cell Chymase 1.13 Å! LEAP (7H66)", "tag": "PDB: 7H66", "title": "103 · Mast-Cell Chymase 1.13 Å! LEAP (7H66)", "cats": ["all", "organ"]}, {"n": 104, "key": "7o6c", "pdb": "7O6C", "btn": "104 · FTMT Ferritin 2.88 QiB #104! (7O6C)", "tag": "PDB: 7O6C", "title": "104 · FTMT Ferritin 2.88 QiB #104! (7O6C)", "cats": ["all", "gateg4"]}, {"n": 105, "key": "5e7w", "pdb": "5E7W", "btn": "105 · 2Zn Insulin 0.95 Å #105!! (5E7W)", "tag": "PDB: 5E7W", "title": "105 · 2Zn Insulin 0.95 Å #105!! (5E7W)", "cats": ["all", "subangstrom"]}, {"n": 106, "key": "2jkh", "pdb": "2JKH", "btn": "106 · Factor Xa 1.25 Å COMPASS/EVRA (2JKH)", "tag": "PDB: 2JKH", "title": "106 · Factor Xa 1.25 Å COMPASS/EVRA (2JKH)", "cats": ["all", "organ"]}, {"n": 107, "key": "2hhj", "pdb": "2HHJ", "btn": "107 · Erythrocyte BPGM 1.50 Å MEED (2HHJ)", "tag": "PDB: 2HHJ", "title": "107 · Erythrocyte BPGM 1.50 Å MEED (2HHJ)", "cats": ["all", "organ"]}, {"n": 108, "key": "9iay", "pdb": "9IAY", "btn": "108 · Sub-Å KRAS 0.953 Å #108! (9IAY)", "tag": "PDB: 9IAY", "title": "108 · Sub-Å KRAS 0.953 Å #108! (9IAY)", "cats": ["all", "subangstrom"]}, {"n": 109, "key": "2aeb", "pdb": "2AEB", "btn": "109 · ARG1 Mn₂ 688 QiB / 915L #109! (2AEB)", "tag": "PDB: 2AEB", "title": "109 · ARG1 Mn₂ 688 QiB / 915L #109! (2AEB)", "cats": ["all", "gateg4"]}, {"n": 110, "key": "3zsj", "pdb": "3ZSJ", "btn": "110 · Galectin-3 0.86 Å #110!! (3ZSJ)", "tag": "PDB: 3ZSJ", "title": "110 · Galectin-3 0.86 Å #110!! (3ZSJ)", "cats": ["all", "subangstrom"]}, {"n": 111, "key": "7fxo", "pdb": "7FXO", "btn": "111 · FABP1 Bile Shuttle 1.30 Å (7FXO)", "tag": "PDB: 7FXO", "title": "111 · FABP1 Bile Shuttle 1.30 Å (7FXO)", "cats": ["all", "pgx", "pathogen"]}, {"n": 112, "key": "7w2p", "pdb": "7W2P", "btn": "112 · SMN1 Tudor 1.15 Å SMA (7W2P)", "tag": "PDB: 7W2P", "title": "112 · SMN1 Tudor 1.15 Å SMA (7W2P)", "cats": ["all", "pgx"]}, {"n": 113, "key": "4ezf", "pdb": "4EZF", "btn": "113 · MitoNEET 165kQiB #113! (4EZF)", "tag": "PDB: 4EZF", "title": "113 · MitoNEET 165kQiB #113! (4EZF)", "cats": ["all", "gateg4"]}, {"n": 114, "key": "2ppn", "pdb": "2PPN", "btn": "114 · FKBP12 0.92 Å #114! CYP3A5 (2PPN)", "tag": "PDB: 2PPN", "title": "114 · FKBP12 0.92 Å #114! CYP3A5 (2PPN)", "cats": ["all", "subangstrom", "pgx"]}, {"n": 115, "key": "4o8h", "pdb": "4O8H", "btn": "115 · Cyclophilin D 0.85 Å #115!! (4O8H)", "tag": "PDB: 4O8H", "title": "115 · Cyclophilin D 0.85 Å #115!! (4O8H)", "cats": ["all", "subangstrom"]}];
  const OCQ_DOC_INDEX = [{"key": "v4_7_holobiont_qldpc_genomic_organ_convergence_companion", "btnId": "tab-doc-v47", "title": "🌊 Paper XXXIII (37th! · Receipt #56): v4.7 515/515 Parity, &gt;+£40.23B/yr, 0.85 Å 115-PDB, 3,808 Evals &amp; BB-qLDPC / 165kQiB (10 pp.)"}, {"key": "v4_6_continuum_cancer_leder_limb_companion", "btnId": "tab-doc-v46", "title": "🌌 Paper XXXII (36th! · Receipt #55): v4.6 500/500 Parity, &gt;+£36.27B/yr, 0.86 Å 110-PDB, 3,696 Evals &amp; 915L NEO / 688 QiB (10 pp.)"}, {"key": "v4_5_quettibyte_cvd_child_prehab_companion", "btnId": "tab-doc-v45", "title": "🚀 Paper XXXI (35th! · Receipt #54): v4.5 475/475 Parity, &gt;+£32.78B/yr, 0.95 Å 105-PDB, 3,584 Evals &amp; 2.88 QiB CVD/Child/Prehab (10 pp.)"}, {"key": "v4_4_centennial_mental_copd_bbv_b12_companion", "btnId": "tab-doc-v44", "title": "🏛 Paper XXX (34th! · Receipt #53): v4.4 460/460 Parity, 0.72 Å 100-PDB, 3,472 Evals &amp; 12.39 RiB Mental/COPD/BBV/B12 (10 pp.)"}, {"key": "v4_3_kidney_pain_limb_sight_companion", "btnId": "tab-doc-v43", "title": "🫘 Paper XXIX (33rd! · Receipt #52): v4.3 445/445 Parity, 0.66 Å 95-PDB, 3,360 Evals &amp; 53.61 YiB Kidney/Pain/Sight (10 pp.)"}, {"key": "v4_2_stroke_liver_cognitive_companion", "btnId": "tab-doc-v42", "title": "🧠 Paper XXVIII (32nd! · Receipt #51): v4.2 430/430 Parity, 90-PDB, 3,248 Evals &amp; 3.49 YiB Stroke/Liver/Cog (10 pp.)"}, {"key": "v4_1_heart_failure_continuum_companion", "btnId": "tab-doc-v41", "title": "❤️ Paper XXVII (31st! · Receipt #50): v4.1 415/415 Parity, 85-PDB, 3,136 Evals &amp; 233.58 ZiB Heart Failure (10 pp.)"}, {"key": "v4_0_sepsis_autoimmune_anticoagulation_companion", "btnId": "tab-doc-v40", "title": "🚨 Paper XXVI (30th!): v4.0 400/400 Parity, 80-PDB, 3,024 Evals &amp; 15.28 ZiB Sepsis/MTX/Warfarin (10 pp.)"}, {"key": "v3_9_pharmacy_parkinsons_prostate_companion", "btnId": "tab-doc-v39", "title": "🏆 Paper XXV: v3.9 7/7 Pharmacy First, Parkinson&apos;s QM/MM &amp; &gt;1 ZiB Prostate (10 pp.)"}, {"key": "v3_8_uti_sight_epilepsy_companion", "btnId": "tab-doc-v38", "title": "⚡ Paper XXIV: v3.8 70-PDB &amp; G1–G100 Pharmacy First UTI, Sight-Loss &amp; NEGF Epilepsy (10 pp.)"}, {"key": "v3_7_thyroid_gout_gastro_companion", "btnId": "tab-doc-v37", "title": "🧬 Paper XXIII: v3.7 65-PDB Löwdin Thyroid, Schrieffer-Wolff Gout &amp; Fukui GI (10 pp.)"}, {"key": "v3_6_dental_sleep_migraine_companion", "btnId": "tab-doc-v36", "title": "🦷 Paper XXII: v3.6 60-PDB Dental SDF, Floquet Sleep &amp; Pulay CGRP (10 pp.)"}, {"key": "v3_5_addiction_overdose_companion", "btnId": "tab-doc-v35", "title": "🛡 Paper XXI: v3.5 Addiction, Ghost CP-MP2, Eckart &amp; Naloxone (10 pp.)"}, {"key": "v3_4_womens_lifecourse_companion", "btnId": "tab-doc-v34", "title": "🌸 Paper XX: v3.4 Women&apos;s Lifecourse, [4Fe-4S] Iron &amp; LBHB (10 pp.)"}, {"key": "v3_3_immunoprevention_companion", "btnId": "tab-doc-v33", "title": "💉 Paper XIX: v3.3 Immunoprevention, Cold-Chain &amp; ENAQT (10 pp.)"}, {"key": "v3_2_msk_bone_companion", "btnId": "tab-doc-v32", "title": "🦴 Paper XVIII: v3.2 Quantum MSK, Vitamin D &amp; ³¹P Bone (10 pp.)"}, {"key": "v3_1_water_nutrition_companion", "btnId": "tab-doc-v31", "title": "💧 Paper XVII: v3.1 Water, PFAS &amp; Nutritional PCET (10 pp.)"}, {"key": "v3_0_exposome_companion", "btnId": "tab-doc-v30", "title": "🌬 Paper XVI: v3.0 Spin Exposome, Chronobiology &amp; Q-Breath (10 pp.)"}, {"key": "v2_9_lifecourse_companion", "btnId": "tab-doc-v29", "title": "🧬 Paper XV: v2.9 Lifecourse World Model, HIPS &amp; Clinker-UK (10 pp.)"}, {"key": "v2_8_rigorous_qtda_companion", "btnId": "tab-doc-v28", "title": "🌐 Paper XIV: v2.8 Rigorous QTDA, ACQ &amp; MLTC (10 pp.)"}, {"key": "v2_7_nine_pillar_companion", "btnId": "tab-doc-v27", "title": "🏛 Paper XIII: v2.7 9-Pillar DQML &amp; PQC (10 pp.)"}, {"key": "nine_pillars_grant_dossier", "btnId": "tab-doc-dossier9", "title": "📄 9-Pillar Grant Dossier (2 pp.)"}, {"key": "v2_6_qtda_workforce_companion", "btnId": "tab-doc-v26", "title": "🌐 Paper XII: v2.6 QTDA &amp; Workforce (10 pp.)"}, {"key": "v2_5_photobiology_qoct_companion", "btnId": "tab-doc-v25", "title": "☀ Paper XI: v2.5 Photobiology &amp; HOM Q-OCT (11 pp.)"}, {"key": "v2_4_relativistic_sabre_companion", "btnId": "tab-doc-v24", "title": "⚛ Paper X: v2.4 Relativistic Pt &amp; SABRE MRI (10 pp.)"}, {"key": "v2_3_tunnelling_nv_companion", "btnId": "tab-doc-v23", "title": "💎 Paper IX: v2.3 Tunnelling &amp; NV⁻ Biosensing (10 pp.)"}, {"key": "v2_2_lifecourse_photonics_companion", "btnId": "tab-doc-v22", "title": "🧬 Paper VIII: v2.2 Lifecourse &amp; Photonics (10 pp.)"}, {"key": "v2_1_amr_opm_companion", "btnId": "tab-doc-v21", "title": "🦠 Paper VII: v2.1 AMR &amp; OPM (10 pp.)"}, {"key": "v2_molecules_companion", "btnId": "tab-doc-v20", "title": "⚛ Paper VI: v2.0 Molecules→NHC (10 pp.)"}, {"key": "cp1350_companion", "btnId": "tab-doc-cp1350", "title": "🏛 Paper V: CP 1350 &amp; 5/5 Core20PLUS5 (13 pp.)"}, {"key": "nandatown_companion", "btnId": "tab-doc-nandatown", "title": "⛵ Paper IV: NandaTown &amp; HAL (12 pp.)"}, {"key": "trial_protocol", "btnId": "tab-doc-protocol", "title": "🧪 Protocol III: NHS Stepped-Wedge &amp; OpenSAFELY (11 pp.)"}, {"key": "moth_companion", "btnId": "tab-doc-moth", "title": "🦋 Paper II: Moth × Tessa Study (12 pp.)"}, {"key": "opencareq", "btnId": "tab-doc-opencareq", "title": "📘 Paper I: Monograph (21 pp.)"}, {"key": "clinician_briefing", "btnId": "tab-doc-briefing", "title": "🩺 Clinician 2-Page Guide"}, {"key": "patient_ppi_leaflet", "btnId": "tab-doc-ppi", "title": "🤝 Patient PPI 1-Page"}, {"key": "lean_canvas_poster", "btnId": "tab-doc-poster", "title": "🖼 A3 Lean Canvas Poster"}];
  const OCQ_STUDIO_INDEX = [{"title": "🌊 v4.7 Blue Ocean Convergence Studio (115 PDBs · BB-qLDPC · 165kQiB 4EZF)", "sub": "Anshu O(log M) Holobiont FMT/TMAO · Day-0 SMA/HFE NHSBT · O(1) LOCC & 0.85 Å 4O8H", "url": "quantum-holobiont-genomic-organ-convergence.html", "ver": "v4.7"}, {"title": "🌌 v4.6 Continuum & Half-Millennium Studio (110 PDBs · 915L NEO · 688 QiB 2AEB)", "sub": "First-Quantized NEO TLHC/Lynch · CKBG KMS LeDeR/MEED · Bell/qDRIFT PAD & 0.86 Å 3ZSJ", "url": "quantum-continuum-cancer-leder-limb.html", "ver": "v4.6"}, {"title": "🚀 v4.5 Quettibyte Summit Studio (105 PDBs · 2.88 QiB FTMT · >+£30B/yr)", "sub": "CG71 FH/PCSK9/Lp(a)/Colchicine · LEAP Allergy & ELSA T1D · 0.95 Å 5E7W Insulin & Prehab", "url": "quantum-quettibyte-cvd-child-prehab.html", "ver": "v4.5"}, {"title": "🏛 v4.4 Centennial Studio (100 PDBs · 12.39 RiB SOD1 · 0.72 Å 6S2M)", "sub": "GKSL NG222 Mental Health Taper · DF COPD SpO2 88-92% · Opt-Out BBV, B12 & G6PD", "url": "quantum-centennial-mental-copd-bbv-b12.html", "ver": "v4.4"}, {"title": "🫘 v4.3 Sub-Ångström Kidney, Pain, Falls & Sight Studio (95 PDBs · 0.66 Å 1US0)", "sub": "53.61 YiB Catalase LCU/QSP CKD · Eigenpath AQLS NG193/CG161 · QCELS Diabetic Foot/Sight", "url": "quantum-kidney-pain-and-limb-sight.html", "ver": "v4.3"}, {"title": "🧠 v4.2 Yobibyte Stroke, Liver & Cognitive Studio (90 PDBs · 3.49 YiB 4D1P)", "sub": "McLachlan VarQITE DG59 CYP2C19 · MLAE MASLD ELF · Szegedy SNAP NAC & ACHIEVE Dementia", "url": "quantum-stroke-liver-cognitive.html", "ver": "v4.2"}, {"title": "❤️ v4.1 Heart Failure Continuum Studio (85 PDBs · 233.58 ZiB 4OYN · Receipt #50)", "sub": "Carleman-QLBM & Q-SPH Valve/oHCM · ADAPT-VQE IRONMAN IV Iron · Domain-Wall STRONG-HF", "url": "quantum-heart-failure-continuum.html", "ver": "v4.1"}, {"title": "🚨 v4.0 Sepsis, Autoimmune & Anticoagulation Studio (80 PDBs · 15.28 ZiB MPO)", "sub": "Jarzynski-Crooks Sepsis/Anaphylaxis · SSH-Zak Weekly MTX & PANTS · Wigner Warfarin", "url": "quantum-sepsis-autoimmune-anticoagulation.html", "ver": "v4.0"}, {"title": "🏆 v3.9 7/7 NHS Pharmacy First, Parkinson's & Prostate Studio (75 PDBs · >1 ZiB)", "sub": "1-RDM/NBO PALACE Penicillin Delabeling · Warshel QM/MM NG71 On-Time · Bloch-Torrey mpMRI", "url": "quantum-pharmacy-parkinsons-prostate.html", "ver": "v3.9"}, {"title": "⚡ v3.8 Pharmacy First UTI, Sight-Loss & NEGF Epilepsy Studio (70 PDBs · G1-G100)", "sub": "Marcus-Jortner NG109 UTI · Dexter-PPP Glaucoma/AMD · Landauer NEGF Valproate PPP", "url": "quantum-uti-sight-epilepsy.html", "ver": "v3.8"}, {"title": "🧬 v3.7 Thyroid Löwdin, XOR Gout & Fukui GI Studio (65 PDBs)", "sub": "3c-4e Deiodinase NG145/TRUST · Schrieffer-Wolff Allopurinol/Azathioprine · H. pylori PPI", "url": "quantum-thyroid-gout-gastro.html", "ver": "v3.7"}, {"title": "🦷 v3.6 Dental SDF, Floquet Sleep & CGRP Migraine Studio (60 PDBs)", "sub": "Bloch-Ewald Fluorapatite & Ag+ SDF · Floquet OSA/Daridorexant · Pulay CGRP Gepants", "url": "quantum-dental-sleep-migraine.html", "ver": "v3.6"}, {"title": "🛡 v3.5 Addiction, Alcohol & Overdose Prevention Studio (55 PDBs)", "sub": "Boys-Bernardi Cytisine/Clozapine · Eckart Pabrinex-First · Feshbach Nitazene Naloxone", "url": "quantum-addiction-pain.html", "ver": "v3.5"}, {"title": "🌸 v3.4 Women's Lifecourse, [4Fe-4S] Iron & Menopause Studio (50 PDBs)", "sub": "Q48H Iron & NG12/NG88 · Sigma-Hole NK3R Fezolinetant · Colbert-Miller LBHB & Jess's Rule", "url": "quantum-womens-health.html", "ver": "v3.4"}, {"title": "💉 v3.3 Quantum Immunoprevention, Cold-Chain & ENAQT Studio (45 PDBs)", "sub": "RSV Prefusion & FcRn-YTE · mRNA 2'-OH Cold-Chain · Plenio-Huelga ENAQT & HPV 2040", "url": "quantum-immunoprevention-vaccines.html", "ver": "v3.3"}, {"title": "🦴 v3.2 Quantum MSK, Conical Vitamin D & 31P Bone Studio (40 PDBs)", "sub": "Berry Phase pi 7-DHC Fitzpatrick V-VI · [Mg2+]3 Zoledronate FLS · 0 mSv 31P-1H UTE", "url": "quantum-msk-bone.html", "ver": "v3.2"}, {"title": "💧 v3.1 Water Toxicology, PFAS & Nutritional PCET Studio (35 PDBs)", "sub": "SFX2C Pb2+ 6s2 Lone Pair & UKHSA PFAS · Doktorov Bosons · DHFR Folate/B12 2D PCET", "url": "quantum-water-nutrition.html", "ver": "v3.1"}, {"title": "🌬 v3.0 Spin Exposome, Chronobiology & Q-Breath Studio (30 PDBs)", "sub": "Jones-Hore Radical-Pair PM2.5 · Spohn NHS Shift-Work · Mid-IR QCL Breathomics", "url": "quantum-exposome-breathomics.html", "ver": "v3.0"}, {"title": "🧬 v2.9 Lifecourse Branching World Model, HIPS & Clinker-UK Studio", "sub": "7-Condition Competing Risks + SETD7 Memory · ISB1523 HIPS 0s Drift · SNOMED/dm+d Linker", "url": "lifecourse-world-model.html", "ver": "v2.9"}, {"title": "🌐 v2.8 Warsaw Quantum Seminar: Rigorous Persistent QTDA & MLTC", "sub": "Schur-Laplacian & Directed Flag Cascades · 10q SUSY & Chebyshev QSVT · ACQ CQRS", "url": "warsaw-quantum-2027.html", "ver": "v2.8"}, {"title": "🏛 v2.7 Nine-Pillar Sovereign Clinical Quantum, DQML & UK NCSC PQC", "sub": "Comb-PQK · 7-Region SDE Wire Knitting · Hybrid ML-KEM-768 + ML-DSA-65 CBOM", "url": "nine-pillars.html", "ver": "v2.7"}, {"title": "🛡 G1–G136 Clinical AI & Quantum Safety Red-Team Harness (3,808 Evals)", "sub": "272 Paired Traps & Safe Twins × 7 Agents · Zero-Trust DCB0129 Runtime Commit Gate", "url": "harness.html", "ver": "Safety"}, {"title": "🩺 Plain-English Clinician, Pharmacist, PPI & NHS Lean Canvas Guide", "sub": "Zero-Equation 7-Layer Patient Story · Jargon Translator · Reading-Age 11-12 PPI", "url": "clinician-guide.html", "ver": "Guide"}, {"title": "📋 CSC-QT 36-Indicator DCB0129 / DCB0160 Safety Case Pack", "sub": "Oskrochi & Grimes (2026) Non-Scoring Profile · NHS 5x5 Risk Matrix · Bow-Tie CSCLint", "url": "safety-case.html", "ver": "DCB0129"}, {"title": "🧭 OPENCAREQ-SW-MSE 42-ICB Stepped-Wedge Trial & OpenSAFELY ehrQL", "sub": "HiGHS Stratified 25-PCN Allocation · Strong 2015 EVSI/ENBS · Stage-0 CCW/IPCW", "url": "trial-protocol.html", "ver": "Trial"}, {"title": "📦 Tri-Standard Quantum Card++ & CycloneDX 1.6 QBOM Explorer", "sub": "Everitt-Ji + NVIDIA Model Card++ + Dual-Regime FMEA · Compiled HUGR Binaries", "url": "quantum-card.html", "ver": "QBOM"}, {"title": "⚖ 5-ICB Anti-Goodhart Policy Challenge & SwarmWorld Leaderboard", "sub": "Dual HiGHS MILP Goodhart Theorem · Sealed ML-DSA-65 Scorecards & Trap Controls", "url": "challenge.html", "ver": "Bench"}, {"title": "🏠 OpenCareQ v4.7 Main Flagship Hub & 115-Crystal 3Dmol Theater", "sub": "+£40.23B/yr 42-ICB DCEA · Inline PDF.js Reader · 115 RCSB PDBs · 56 Receipts", "url": "index.html", "ver": "Hub"}];
  const OCQ_SAFETY_INDEX = [{"code": "G136", "title": "Rule G136 · Ex-Situ COPE/COMPARE Perfusion & CPIC CYP3A5*1 Tacrolimus Shield", "sub": "Blocks premature marginal organ discard, CYP3A5*1 underdosing, Paxlovid 34.6x DDI & O(n) unitary drift"}, {"code": "G135", "title": "Rule G135 · UK Biobank HFE p.C282Y Circular NHSBT Venesection & 165kQiB Gate G4", "sub": "Blocks blind iron in ferritin-high HFE homozygotes, wasted venesection & unverified 165kQiB QPU claims"}, {"code": "G134", "title": "Rule G134 · Day-Zero NHS Generation Study Newborn WGS SMA ≤14d Rescue", "sub": "Blocks watchful-waiting motor-neuron loss in homozygous SMN1 deletion (SPR1NT 100% survival)"}, {"code": "G133", "title": "Rule G133 · NICE MTG71 FMT, Bacterial GUS SN-38, PREPARE 12-Gene & Gut TMAO", "sub": "Blocks unscreened/neutropenic FMT, UGT1A1*28 x GUS toxicity & unguided clopidogrel/statin"}, {"code": "G131", "title": "Rule G131 · NHS LeDeR 14+ Annual Health Check, STOMP & MEED Pabrinex-First", "sub": "Blocks diagnostic overshadowing & refeeding carbohydrate before IV thiamine + PO4 replacement"}, {"code": "G130", "title": "Rule G130 · NICE DG56 FIT, DG27 Lynch Reflex, CAPP2 Aspirin & UGT1A1*28", "sub": "Blocks >6wk rectal bleeding delay, missed MMR/Lynch testing & unreduced irinotecan"}, {"code": "G129", "title": "Rule G129 · NHS TLHC Low-Dose CT, Pre-PD-1 EGFR/ALK/KRAS & ADAURA Osimertinib", "sub": "Blocks chest X-ray reassurance in high-risk smokers & PD-1 before oncogenic driver panel"}, {"code": "G128", "title": "Rule G128 · 4-Week Elective PREHAB, SGLT2i 3-4d Pre-Op Stop (euDKA) & PAUSE DOAC", "sub": "Blocks unpaused perioperative SGLT2i euglycaemic DKA & unbridged DOAC neuraxial block"}, {"code": "G127", "title": "Rule G127 · UK ELSA Islet Screening, Same-Day Child 4Ts & Zero-Bolus NG18 DKA", "sub": "Blocks delayed GP booking in polydipsic child & cerebral-oedema IV insulin bolus in paediatric DKA"}, {"code": "G124", "title": "Rule G124 · NICE NG247 Folate-Before-B12 Subacute Cord Trap & CPIC G6PD Rasburicase", "sub": "Blocks folic acid masking B12 neuropathy & rasburicase/dapsone haemolysis in G6PD deficiency"}, {"code": "G122", "title": "Rule G122 · BTS/NICE NG115 COPD Controlled SpO2 88–92% & Cardioselective Beta-1", "sub": "Blocks 15 L/min 100% O2 hypercapnic narcosis in acute COPD & non-selective beta-blockers"}, {"code": "G121", "title": "Rule G121 · NICE NG222 Antidepressant Hyperbolic Taper, MAOI Washout & Elderly QTc", "sub": "Blocks abrupt SSRI/SNRI cessation withdrawal & >20 mg citalopram in over-65s"}, {"code": "G117", "title": "Rule G117 · Silent CKD uACR+eGFR, Finerenone TA877 & Triple-Whammy AKI Veto", "sub": "Blocks eGFR-only screening without uACR & NSAID addition onto ACEi + diuretic"}, {"code": "G113", "title": "Rule G113 · NICE DG59 CYP2C19 Clopidogrel Loss-of-Function & Acute Stroke CT Gate", "sub": "Routes CYP2C19 LoF TIA/stroke carriers to dipyridamole/ticagrelor & blocks pre-CT thrombolysis"}, {"code": "G109", "title": "Rule G109 · NICE NG106 NT-proBNP >2,000 2-Week Echo & Mavacamten/HER2 LVEF Gate", "sub": "Enforces 2wk specialist echo & holds mavacamten/trastuzumab when LVEF < 50%"}, {"code": "G106", "title": "Rule G106 · NHS Never-Event Weekly Oral Methotrexate & PANTS HLA-DQA1*05 IBD", "sub": "Hard-blocks fatal daily oral methotrexate prescribing & unshielded anti-TNF immunogenicity"}, {"code": "G105", "title": "Rule G105 · NICE NG253 Sepsis 1h Bundle & CG134 IM Anterolateral Thigh Adrenaline", "sub": "Blocks dangerous ward IV adrenaline bolus in anaphylaxis & supine posture breach"}, {"code": "G100", "title": "Rule G100 · MHRA Valproate Pregnancy Prevention Programme (PPP) & HLA-B*15:02", "sub": "Enforces two-specialist valproate PPP verification & carbamazepine SJS/TEN screening"}, {"code": "G97", "title": "Rule G97 · Pharmacy First UTI: Methotrexate×Trimethoprim Veto & eGFR<45 Guard", "sub": "Blocks fatal folate-antagonist pancytopenia & ineffective nitrofurantoin in low eGFR"}, {"code": "G87", "title": "Rule G87 · Synthetic Nitazene Overdose Extended Observation & Repeat Naloxone", "sub": "Blocks premature 30-min discharge before 70-min nitazene renarcotization window"}, {"code": "G86", "title": "Rule G86 · NICE CG100 Parenteral Pabrinex BEFORE IV Glucose (Wernicke Shield)", "sub": "Prevents irreversible Wernicke-Korsakoff precipitation in malnourished/alcohol patients"}, {"code": "G28", "title": "Rule G28 · Multi-Ethnic DPYD p.Tyr186Cys (rs115232898) Fluoropyrimidine Equity", "sub": "Catches African-enriched 477.7x DPD variant missed by 4-variant European-only panels"}, {"code": "G6", "title": "Rule G6 · Gate G4 Classical Floor & Noisy p2 > p2_crit Abstention Firewall", "sub": "Aborts quantum-washed/noisy NISQ readouts when exact CPU solvers run in <25 ms"}, {"code": "G1", "title": "Rule G1 · 14-Day Hepatocyte CYP3A4 Depot Washout & Post-Ritonavir Restart Shield", "sub": "Prevents 4.437x supratherapeutic toxicity on premature Day-7 post-washout restart"}];

  const PDB_BY_KEY = Object.create(null);
  OCQ_PDB_INDEX.forEach(function (item) {
    PDB_BY_KEY[item.key] = item;
  });

  function isIndexPage() {
    return Boolean(document.getElementById("v20Mol3dViewport") && document.getElementById("paper-preview-panel"));
  }

  function isHarnessPage() {
    return Boolean(document.getElementById("svgTrapMatrix") && document.getElementById("selVignette"));
  }

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* ------------------------------------------------------------------------
     1. Top Scroll-Progress Hairline Across All 29 Pages
     ------------------------------------------------------------------------ */
  function initScrollProgress() {
    let bar = document.getElementById("scrollProgress") || document.getElementById("ocqScrollProgress");
    if (!bar) {
      bar = document.createElement("div");
      bar.id = "ocqScrollProgress";
      document.body.prepend(bar);
    }
    let ticking = false;
    function update() {
      const docEl = document.documentElement;
      const max = Math.max(1, docEl.scrollHeight - window.innerHeight);
      const pct = Math.min(100, Math.max(0, (window.scrollY / max) * 100));
      bar.style.width = pct.toFixed(2) + "%";
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });
    update();
  }

  /* ------------------------------------------------------------------------
     2. Interactive Holobiont–BB-qLDPC Torus Lattice Canvas (#heroQuantumCanvas)
     ------------------------------------------------------------------------ */
  function initHeroQuantumCanvas() {
    const canvas = document.getElementById("heroQuantumCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let visible = true;
    let rafId = 0;
    let pointerX = 0.5;
    let pointerY = 0.35;

    const N = 34;
    const nodes = [];
    for (let i = 0; i < N; i++) {
      const angle = (i / N) * Math.PI * 2;
      const ring = i % 3;
      nodes.push({
        bx: 0.52 + Math.cos(angle) * (0.18 + ring * 0.12),
        by: 0.48 + Math.sin(angle * (ring === 1 ? 2 : 1)) * (0.20 + ring * 0.09),
        vx: (Math.cos(i * 1.7) * 0.00018),
        vy: (Math.sin(i * 2.3) * 0.00016),
        r: ring === 0 ? 2.4 : (ring === 1 ? 1.85 : 1.45),
        hue: i % 5 === 0 ? "#f4ae42" : (i % 3 === 0 ? "#3898ff" : "#38d6c4"),
        phase: i * 0.42
      });
    }

    function resize() {
      const rect = canvas.parentElement ? canvas.parentElement.getBoundingClientRect() : canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(320, Math.floor(rect.width));
      height = Math.max(240, Math.floor(rect.height));
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function drawFrame(t) {
      ctx.clearRect(0, 0, width, height);
      const sec = (t || 0) * 0.001;
      const px = (pointerX - 0.5) * 18;
      const py = (pointerY - 0.5) * 12;

      const pts = nodes.map(function (n, idx) {
        const wobbleX = reducedMotion ? 0 : Math.sin(sec * 0.55 + n.phase) * 14 + px * ((idx % 3) * 0.35);
        const wobbleY = reducedMotion ? 0 : Math.cos(sec * 0.48 + n.phase * 1.2) * 10 + py * ((idx % 3) * 0.35);
        return {
          x: n.bx * width + wobbleX,
          y: n.by * height + wobbleY,
          r: n.r,
          hue: n.hue,
          pulse: 0.55 + 0.45 * Math.sin(sec * 1.6 + n.phase)
        };
      });

      const maxDist = Math.min(width, height) * 0.29;
      ctx.lineWidth = 0.85;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < maxDist) {
            const alpha = (1 - d / maxDist) * 0.14;
            ctx.strokeStyle = (i + j) % 7 === 0
              ? "rgba(244, 174, 66, " + (alpha * 0.85).toFixed(3) + ")"
              : "rgba(56, 214, 196, " + alpha.toFixed(3) + ")";
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }

      for (let k = 0; k < pts.length; k++) {
        const p = pts[k];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * (0.9 + p.pulse * 0.25), 0, Math.PI * 2);
        ctx.fillStyle = p.hue;
        ctx.globalAlpha = 0.35 + p.pulse * 0.35;
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      if (!reducedMotion && visible) {
        rafId = window.requestAnimationFrame(drawFrame);
      }
    }

    resize();
    window.addEventListener("resize", function () {
      resize();
      if (reducedMotion) drawFrame(0);
    });

    if (canvas.parentElement) {
      canvas.parentElement.addEventListener("pointermove", function (e) {
        const r = canvas.parentElement.getBoundingClientRect();
        if (r.width > 0 && r.height > 0) {
          pointerX = (e.clientX - r.left) / r.width;
          pointerY = (e.clientY - r.top) / r.height;
        }
      }, { passive: true });
    }

    if ("IntersectionObserver" in window && !reducedMotion) {
      const io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          visible = entry.isIntersecting;
          if (visible && !rafId) {
            rafId = window.requestAnimationFrame(drawFrame);
          } else if (!visible && rafId) {
            window.cancelAnimationFrame(rafId);
            rafId = 0;
          }
        });
      }, { threshold: 0.05 });
      io.observe(canvas);
    }

    drawFrame(0);
    if (!reducedMotion) {
      rafId = window.requestAnimationFrame(drawFrame);
    }
  }

  /* ------------------------------------------------------------------------
     3. 115-Crystal 3Dmol.js Stage-First Theater Controller
     ------------------------------------------------------------------------ */
  let activeMolCat = "all";

  function hydrateMol3dButtons() {
    const container = document.getElementById("v20Mol3dTabs");
    if (!container) return;
    OCQ_PDB_INDEX.forEach(function (item) {
      const btn = document.getElementById("mol3dBtn-" + item.key);
      if (!btn) return;
      btn.dataset.molCats = item.cats.join(" ");
      btn.dataset.molSearch = (item.n + " " + item.pdb + " " + item.btn + " " + item.tag + " " + item.title).toLowerCase();
      btn.title = item.title + " (" + item.tag + ")";
    });
  }

  function applyMol3dDockFilter() {
    const container = document.getElementById("v20Mol3dTabs");
    if (!container) return;
    const input = document.getElementById("mol3dSearchInput");
    const q = input ? input.value.toLowerCase().trim() : "";
    const tokens = q ? q.split(/\s+/) : [];
    let shown = 0;
    const buttons = container.querySelectorAll('button[id^="mol3dBtn-"]');
    buttons.forEach(function (btn) {
      const cats = (btn.dataset.molCats || "all").split(/\s+/);
      const hay = (btn.dataset.molSearch || btn.textContent || "").toLowerCase();
      const catOk = activeMolCat === "all" || cats.indexOf(activeMolCat) !== -1;
      const qOk = tokens.every(function (tok) { return hay.indexOf(tok) !== -1; });
      const visible = catOk && qOk;
      btn.classList.toggle("mol3d-filter-hidden", !visible);
      if (visible) shown += 1;
    });
    const countEl = document.getElementById("mol3dMatchCount");
    if (countEl) {
      countEl.textContent = shown + " / " + buttons.length + " crystals";
    }
  }

  window.filterMol3dDock = function (category, clickedBtn) {
    activeMolCat = category || "all";
    document.querySelectorAll("[data-mol3d-cat]").forEach(function (b) {
      b.classList.toggle("active", b === clickedBtn || b.getAttribute("data-mol3d-cat") === activeMolCat);
    });
    applyMol3dDockFilter();
  };

  window.stepMol3dCrystal = function (delta) {
    const container = document.getElementById("v20Mol3dTabs");
    if (!container || typeof window.selectMol3dStructure !== "function") return;
    const visibleBtns = Array.from(container.querySelectorAll('button[id^="mol3dBtn-"]:not(.mol3d-filter-hidden)'));
    const pool = visibleBtns.length ? visibleBtns : Array.from(container.querySelectorAll('button[id^="mol3dBtn-"]'));
    if (!pool.length) return;
    let curIdx = pool.findIndex(function (b) { return b.classList.contains("active"); });
    if (curIdx < 0) curIdx = 0;
    const nextIdx = (curIdx + (delta || 1) + pool.length) % pool.length;
    const nextBtn = pool[nextIdx];
    const key = nextBtn.id.replace("mol3dBtn-", "");
    window.selectMol3dStructure(key);
    nextBtn.scrollIntoView({ block: "nearest", behavior: "smooth" });
  };

  window.toggleMol3dCinema = function () {
    const shell = document.getElementById("v20Mol3dCard");
    const btn = document.getElementById("mol3dCinemaBtn");
    if (!shell) return;
    const expanded = shell.classList.toggle("cinema-expanded");
    if (btn) {
      btn.textContent = expanded ? "⤡ Standard Stage" : "⤢ Cinema Stage";
      btn.classList.toggle("active", expanded);
    }
    if (typeof window.resizeV20Mol3d === "function") {
      setTimeout(window.resizeV20Mol3d, 60);
      setTimeout(window.resizeV20Mol3d, 270);
    }
  };

  window.openMol3dTheater = function (structKey) {
    const key = (structKey || "4o8h").toLowerCase();
    if (!isIndexPage()) {
      window.location.href = "index.html?mol=" + encodeURIComponent(key) + "#v20Mol3dCard";
      return;
    }
    if (typeof window.activateShiftTab === "function") {
      window.activateShiftTab("sickness-to-prevention", "pane-quantum-v20", false);
    }
    const tabBtn = document.querySelector('[data-target-pane="pane-quantum-v20"]');
    if (tabBtn && tabBtn.classList.contains("ux-hidden-by-filter")) {
      tabBtn.classList.remove("ux-hidden-by-filter");
    }
    setTimeout(function () {
      if (typeof window.selectMol3dStructure === "function" && PDB_BY_KEY[key]) {
        if (window.$3Dmol) {
          window.selectMol3dStructure(key);
        } else {
          window.addEventListener("load", function () { window.selectMol3dStructure(key); }, { once: true });
        }
      }
      if (typeof window.resizeV20Mol3d === "function") {
        window.resizeV20Mol3d();
      }
      const btn = document.getElementById("mol3dBtn-" + key);
      if (btn) btn.scrollIntoView({ block: "nearest" });
      const card = document.getElementById("v20Mol3dCard");
      if (card) card.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 55);
  };

  /* ------------------------------------------------------------------------
     4. Paper Reader Deep-Open, Catalog Search & Compact/Bento Switcher
     ------------------------------------------------------------------------ */
  window.openPaperInReader = function (docKey) {
    if (!isIndexPage()) {
      window.location.href = "index.html?doc=" + encodeURIComponent(docKey) + "#paper-preview-panel";
      return;
    }
    if (typeof window.activateShiftTab === "function") {
      window.activateShiftTab("innovation-governance", "pane-papers", false);
    }
    setTimeout(function () {
      const docBtn = document.querySelector('[data-reader-doc="' + docKey + '"]');
      if (docBtn) {
        docBtn.click();
      } else {
        const sel = document.getElementById("reader-doc-select");
        if (sel) {
          sel.value = docKey;
          sel.dispatchEvent(new Event("change"));
        }
      }
      const panel = document.getElementById("paper-preview-panel");
      if (panel) panel.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 45);
  };

  window.filterPaperSearch = function () {
    const input = document.getElementById("paperCatalogSearch");
    const grid = document.getElementById("papersCatalogGrid");
    if (!input || !grid) return;
    const q = input.value.toLowerCase().trim();
    const tokens = q ? q.split(/\s+/) : [];
    let visibleCount = 0;
    if (q) {
      // When typing a search query, search across ALL paper cards regardless of category tab!
      grid.querySelectorAll(".paper-card").forEach(function (card) {
        const hay = (card.textContent || "").toLowerCase();
        const match = tokens.every(function (t) { return hay.indexOf(t) !== -1; });
        card.classList.toggle("paper-search-hidden", !match);
        if (match) {
          card.classList.remove("ux-hidden-by-filter");
          visibleCount += 1;
        }
      });
    } else {
      grid.querySelectorAll(".paper-card").forEach(function (card) {
        card.classList.remove("paper-search-hidden");
      });
      const activeCatBtn = document.querySelector("[data-paper-filter].active");
      if (activeCatBtn && typeof window.filterPaperCards === "function") {
        window.filterPaperCards(activeCatBtn.getAttribute("data-paper-filter") || "featured", activeCatBtn);
      }
      visibleCount = grid.querySelectorAll(".paper-card:not(.ux-hidden-by-filter)").length;
    }
    const statusEl = document.getElementById("paperCatalogCount");
    if (statusEl) {
      statusEl.textContent = q ? (visibleCount + " matching papers") : (visibleCount + " cards shown");
    }
  };

  window.togglePaperCatalogView = function (mode, btnEl) {
    const grid = document.getElementById("papersCatalogGrid");
    if (!grid) return;
    const isCompact = mode === "compact";
    grid.classList.toggle("compact-view", isCompact);
    document.querySelectorAll("[data-paper-view]").forEach(function (b) {
      b.classList.toggle("active", b === btnEl || b.getAttribute("data-paper-view") === mode);
    });
  };

  /* ------------------------------------------------------------------------
     5. Global Spotlight Command Palette Modal (Cmd+K / Ctrl+K / '/')
     ------------------------------------------------------------------------ */
  let cmdBackdrop = null;
  let cmdInput = null;
  let cmdResultsEl = null;
  let cmdActiveTab = "all";
  let cmdFiltered = [];
  let cmdSelectedIdx = 0;

  function buildUnifiedCatalog() {
    const items = [];
    OCQ_STUDIO_INDEX.forEach(function (s) {
      items.push({
        kind: "studio",
        exactKey: s.ver.toLowerCase(),
        badge: s.ver + " Studio",
        badgeCls: "studio",
        title: s.title,
        sub: s.sub,
        search: (s.title + " " + s.sub + " " + s.ver + " " + s.url).toLowerCase(),
        act: function () { window.location.href = s.url; }
      });
    });
    OCQ_PDB_INDEX.forEach(function (p) {
      items.push({
        kind: "pdb",
        exactKey: p.key.toLowerCase(),
        badge: "#" + p.n + " · " + p.pdb,
        badgeCls: "pdb",
        title: p.title,
        sub: p.tag,
        search: ("pdb " + p.n + " #" + p.n + " " + p.pdb + " " + p.btn + " " + p.tag + " " + p.title + " " + p.cats.join(" ")).toLowerCase(),
        act: function () { window.openMol3dTheater(p.key); }
      });
    });
    OCQ_DOC_INDEX.forEach(function (d, idx) {
      items.push({
        kind: "paper",
        exactKey: "doc" + (idx + 1),
        badge: "Doc " + (idx + 1) + "/37",
        badgeCls: "paper",
        title: d.title,
        sub: "Inline PDF.js Typeset Manuscript & Samskrift Cloud (" + d.key + ")",
        search: ("paper manuscript pdf " + d.title + " " + d.key + " " + d.btnId).toLowerCase(),
        act: function () { window.openPaperInReader(d.key); }
      });
    });
    OCQ_SAFETY_INDEX.forEach(function (g) {
      items.push({
        kind: "safety",
        exactKey: g.code.toLowerCase(),
        badge: g.code + " Gate",
        badgeCls: "safety",
        title: g.title,
        sub: g.sub,
        search: ("safety rule guardrail dcb0129 " + g.code + " " + g.title + " " + g.sub).toLowerCase(),
        act: function () {
          if (isHarnessPage() && typeof window.jumpToHarnessRule === "function") {
            window.jumpToHarnessRule(g.code);
          } else {
            window.location.href = "harness.html?rule=" + encodeURIComponent(g.code) + "#studio";
          }
        }
      });
    });
    return items;
  }

  const ALL_CMD_ITEMS = buildUnifiedCatalog();

  function ensureCommandModal() {
    if (cmdBackdrop) return;
    cmdBackdrop = document.createElement("div");
    cmdBackdrop.id = "ocqCmdBackdrop";
    cmdBackdrop.setAttribute("role", "dialog");
    cmdBackdrop.setAttribute("aria-modal", "true");
    cmdBackdrop.setAttribute("aria-label", "OpenCareQ Global Spotlight Search");
    cmdBackdrop.innerHTML =
      '<div id="ocqCmdDialog">' +
        '<div class="ocq-cmd-head">' +
          '<span class="ocq-cmd-icon" aria-hidden="true">⌘</span>' +
          '<input type="search" id="ocqCmdInput" placeholder="Search 115 RCSB PDBs (e.g. 4O8H, 0.85, DPYD), 37 Papers, 25 Studios, or G1–G136…" autocomplete="off" />' +
          '<button type="button" class="ocq-cmd-tab" id="ocqCmdCloseBtn" aria-label="Close Spotlight">ESC</button>' +
        '</div>' +
        '<div class="ocq-cmd-tabs" role="tablist" aria-label="Spotlight Categories">' +
          '<button type="button" class="ocq-cmd-tab active" data-cmd-tab="all">★ All (' + ALL_CMD_ITEMS.length + ')</button>' +
          '<button type="button" class="ocq-cmd-tab" data-cmd-tab="pdb">🧪 115 Crystal PDBs</button>' +
          '<button type="button" class="ocq-cmd-tab" data-cmd-tab="paper">📖 37 Papers &amp; Briefings</button>' +
          '<button type="button" class="ocq-cmd-tab" data-cmd-tab="studio">🌌 28 Studios &amp; Portals</button>' +
          '<button type="button" class="ocq-cmd-tab" data-cmd-tab="safety">🛡 G1–G136 Safety Gates</button>' +
        '</div>' +
        '<div id="ocqCmdResults" role="listbox" aria-label="Spotlight Results"></div>' +
        '<div class="ocq-cmd-foot">' +
          '<span>↑↓ Navigate · ↵ Launch Crystal / Paper / Studio · ESC Close</span>' +
          '<span>phi_present = False · v4.7.0 Blue Ocean</span>' +
        '</div>' +
      '</div>';
    document.body.appendChild(cmdBackdrop);

    cmdInput = document.getElementById("ocqCmdInput");
    cmdResultsEl = document.getElementById("ocqCmdResults");

    cmdBackdrop.addEventListener("click", function (e) {
      if (e.target === cmdBackdrop) window.closeOcqCommandPalette();
    });
    document.getElementById("ocqCmdCloseBtn").addEventListener("click", window.closeOcqCommandPalette);

    cmdBackdrop.querySelectorAll("[data-cmd-tab]").forEach(function (tabBtn) {
      tabBtn.addEventListener("click", function () {
        cmdActiveTab = tabBtn.getAttribute("data-cmd-tab") || "all";
        cmdBackdrop.querySelectorAll("[data-cmd-tab]").forEach(function (b) {
          b.classList.toggle("active", b === tabBtn);
        });
        cmdSelectedIdx = 0;
        renderCmdResults();
        cmdInput.focus();
      });
    });

    cmdInput.addEventListener("input", function () {
      cmdSelectedIdx = 0;
      renderCmdResults();
    });

    cmdInput.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (cmdFiltered.length) {
          cmdSelectedIdx = (cmdSelectedIdx + 1) % cmdFiltered.length;
          syncCmdSelection();
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (cmdFiltered.length) {
          cmdSelectedIdx = (cmdSelectedIdx - 1 + cmdFiltered.length) % cmdFiltered.length;
          syncCmdSelection();
        }
      } else if (e.key === "Enter") {
        e.preventDefault();
        const chosen = cmdFiltered[cmdSelectedIdx];
        if (chosen && typeof chosen.act === "function") {
          window.closeOcqCommandPalette();
          chosen.act();
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        window.closeOcqCommandPalette();
      }
    });
  }

  function syncCmdSelection() {
    if (!cmdResultsEl) return;
    const rows = cmdResultsEl.querySelectorAll(".ocq-cmd-item");
    rows.forEach(function (r, idx) {
      const sel = idx === cmdSelectedIdx;
      r.classList.toggle("selected", sel);
      if (sel) r.scrollIntoView({ block: "nearest" });
    });
  }

  function renderCmdResults() {
    if (!cmdResultsEl) return;
    const q = (cmdInput ? cmdInput.value : "").toLowerCase().trim();
    const tokens = q ? q.split(/\s+/) : [];

    let matches = ALL_CMD_ITEMS.filter(function (it) {
      if (cmdActiveTab !== "all" && it.kind !== cmdActiveTab) return false;
      if (!tokens.length) return true;
      return tokens.every(function (tok) { return it.search.indexOf(tok) !== -1; });
    });

    if (tokens.length) {
      matches.sort(function (a, b) {
        function score(it) {
          let s = 0;
          if (it.exactKey === q) s += 120;
          if (it.badge.toLowerCase().indexOf(q) !== -1) s += 55;
          if (it.title.toLowerCase().indexOf(q) !== -1) s += 25;
          return s;
        }
        return score(b) - score(a);
      });
    }

    if (!tokens.length && cmdActiveTab === "all") {
      // Curated default showcase: top studios, sub-Angstrom PDBs, Paper XXXIII, and G136!
      const curated = [];
      curated.push(ALL_CMD_ITEMS.find(function (x) { return x.kind === "studio" && x.search.indexOf("v4.7") !== -1; }));
      curated.push(ALL_CMD_ITEMS.find(function (x) { return x.kind === "pdb" && x.search.indexOf("4o8h") !== -1; }));
      curated.push(ALL_CMD_ITEMS.find(function (x) { return x.kind === "pdb" && x.search.indexOf("4ezf") !== -1; }));
      curated.push(ALL_CMD_ITEMS.find(function (x) { return x.kind === "pdb" && x.search.indexOf("1us0") !== -1; }));
      curated.push(ALL_CMD_ITEMS.find(function (x) { return x.kind === "paper" && x.search.indexOf("xxxiii") !== -1; }));
      curated.push(ALL_CMD_ITEMS.find(function (x) { return x.kind === "paper" && x.search.indexOf("9-pillar grant dossier") !== -1; }));
      curated.push(ALL_CMD_ITEMS.find(function (x) { return x.kind === "safety" && x.search.indexOf("g136") !== -1; }));
      curated.push(ALL_CMD_ITEMS.find(function (x) { return x.kind === "studio" && x.search.indexOf("clinician") !== -1; }));
      matches = curated.filter(Boolean).concat(matches.slice(0, 28));
      // Deduplicate
      const seen = new Set();
      matches = matches.filter(function (m) {
        if (seen.has(m)) return false;
        seen.add(m);
        return true;
      });
    }

    cmdFiltered = matches.slice(0, 60);
    if (!cmdFiltered.length) {
      cmdResultsEl.innerHTML =
        '<div style="padding:1.4rem 1rem;text-align:center;color:#9eb7b4;font-size:0.84rem;">' +
        'No exact matches — try a PDB ID (<code>4O8H</code>, <code>1US0</code>, <code>4EZF</code>), gene (<code>DPYD</code>, <code>CYP3A5</code>), paper number (<code>XXXIII</code>), or safety gate (<code>G136</code>).' +
        '</div>';
      return;
    }

    cmdResultsEl.innerHTML = cmdFiltered.map(function (item, idx) {
      return (
        '<button type="button" class="ocq-cmd-item' + (idx === cmdSelectedIdx ? ' selected' : '') + '" data-cmd-idx="' + idx + '">' +
          '<div class="ocq-cmd-item-main">' +
            '<span class="ocq-cmd-item-title">' + esc(item.title) + '</span>' +
            '<span class="ocq-cmd-item-sub">' + esc(item.sub) + '</span>' +
          '</div>' +
          '<span class="ocq-cmd-badge ' + esc(item.badgeCls) + '">' + esc(item.badge) + '</span>' +
        '</button>'
      );
    }).join("");

    cmdResultsEl.querySelectorAll(".ocq-cmd-item").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const i = parseInt(btn.getAttribute("data-cmd-idx") || "0", 10);
        const chosen = cmdFiltered[i];
        if (chosen && typeof chosen.act === "function") {
          window.closeOcqCommandPalette();
          chosen.act();
        }
      });
    });
  }

  window.openOcqCommandPalette = function (initialTab, initialQuery) {
    ensureCommandModal();
    if (initialTab) {
      cmdActiveTab = initialTab;
      cmdBackdrop.querySelectorAll("[data-cmd-tab]").forEach(function (b) {
        b.classList.toggle("active", b.getAttribute("data-cmd-tab") === cmdActiveTab);
      });
    }
    if (typeof initialQuery === "string") {
      cmdInput.value = initialQuery;
    }
    cmdSelectedIdx = 0;
    renderCmdResults();
    cmdBackdrop.classList.add("open");
    window.requestAnimationFrame(function () {
      cmdInput.focus();
      cmdInput.select();
    });
  };

  window.closeOcqCommandPalette = function () {
    if (cmdBackdrop) {
      cmdBackdrop.classList.remove("open");
    }
  };

  function bindGlobalSpotlightShortcuts() {
    // Capture phase ensures Cmd/Ctrl+K opens the Global Spotlight Palette on ALL 29 pages
    document.addEventListener("keydown", function (e) {
      const tag = (e.target && e.target.tagName ? e.target.tagName : "").toLowerCase();
      const inField = tag === "input" || tag === "textarea" || tag === "select" || Boolean(e.target && e.target.isContentEditable);
      if ((e.metaKey || e.ctrlKey) && e.key && e.key.toLowerCase() === "k") {
        e.preventDefault();
        e.stopImmediatePropagation();
        if (cmdBackdrop && cmdBackdrop.classList.contains("open")) {
          window.closeOcqCommandPalette();
        } else {
          window.openOcqCommandPalette();
        }
      } else if (!inField && e.key === "/" && !(cmdBackdrop && cmdBackdrop.classList.contains("open"))) {
        e.preventDefault();
        e.stopImmediatePropagation();
        window.openOcqCommandPalette();
      } else if (e.key === "Escape" && cmdBackdrop && cmdBackdrop.classList.contains("open")) {
        e.preventDefault();
        e.stopImmediatePropagation();
        window.closeOcqCommandPalette();
      }
    }, true);
  }

  function injectFloatingCmdPillIfNeeded() {
    if (document.querySelector(".ocq-cmd-trigger") || document.querySelector(".ocq-floating-cmd")) return;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "ocq-floating-cmd";
    btn.setAttribute("aria-label", "Open Global Spotlight Search (Cmd+K)");
    btn.innerHTML = '<span>🔍 Search 115 PDBs &amp; 37 Papers</span><span class="ocq-cmd-kbd">⌘K</span>';
    btn.addEventListener("click", function () { window.openOcqCommandPalette(); });
    document.body.appendChild(btn);
  }

  /* ------------------------------------------------------------------------
     5b. Universal Mobile Header Auto-Upgrade, Table Wrap, 3Dmol Touch Guard
         & visualViewport Soft-Keyboard Adaptation Across All 29 Pages
     ------------------------------------------------------------------------ */
  function upgradeMobileNavAcrossAllPages() {
    const siteNav = document.querySelector(".site-nav");
    if (!siteNav) return;
    const navInner = siteNav.querySelector(".site-nav-inner") || siteNav.querySelector(".container");
    const navLinks = siteNav.querySelector(".nav-links");
    if (!navInner || !navLinks) return;

    let searchBtn = navInner.querySelector(".ocq-mobile-search-btn");
    if (!searchBtn) {
      searchBtn = document.createElement("button");
      searchBtn.type = "button";
      searchBtn.className = "ocq-mobile-search-btn";
      searchBtn.setAttribute("aria-label", "Search 115 PDBs, 37 Papers & 25 Studios");
      searchBtn.innerHTML = '🔍 <span>Search</span>';
      searchBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        window.openOcqCommandPalette();
      });
    }

    let existingToggle = navInner.querySelector("#mobileNavToggle, .mobile-nav-toggle");
    if (existingToggle) {
      // Group 1-tap mobile search button right beside existing hamburger menu button
      const actionsWrap = document.createElement("div");
      actionsWrap.className = "ocq-mobile-actions";
      existingToggle.parentNode.insertBefore(actionsWrap, existingToggle);
      actionsWrap.appendChild(searchBtn);
      actionsWrap.appendChild(existingToggle);
      document.body.classList.add("has-mobile-top-search");
      return;
    }

    // Auto-upgrade the 18 companion pages lacking a mobile hamburger menu
    siteNav.classList.add("ocq-auto-mobile-nav");
    if (!navLinks.id) navLinks.id = "ocqAutoPrimaryNav";

    const autoToggle = document.createElement("button");
    autoToggle.type = "button";
    autoToggle.className = "mobile-nav-toggle";
    autoToggle.id = "mobileNavToggle";
    autoToggle.setAttribute("aria-expanded", "false");
    autoToggle.setAttribute("aria-controls", navLinks.id);
    autoToggle.textContent = "☰ Menu";

    const actionsWrap = document.createElement("div");
    actionsWrap.className = "ocq-mobile-actions";
    actionsWrap.appendChild(searchBtn);
    actionsWrap.appendChild(autoToggle);
    navInner.insertBefore(actionsWrap, navLinks);
    document.body.classList.add("has-mobile-top-search");

    function closeAutoMenu() {
      navLinks.classList.remove("mobile-open");
      autoToggle.setAttribute("aria-expanded", "false");
      autoToggle.textContent = "☰ Menu";
    }

    autoToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      const open = navLinks.classList.toggle("mobile-open");
      autoToggle.setAttribute("aria-expanded", open ? "true" : "false");
      autoToggle.textContent = open ? "✕ Close" : "☰ Menu";
    });

    navLinks.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeAutoMenu);
    });

    document.addEventListener("click", function (e) {
      if (navLinks.classList.contains("mobile-open") && !navLinks.contains(e.target) && !actionsWrap.contains(e.target)) {
        closeAutoMenu();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && navLinks.classList.contains("mobile-open")) {
        closeAutoMenu();
      }
    });
  }

  function upgradeUnwrappedTablesAndGrids() {
    document.querySelectorAll("table").forEach(function (tbl) {
      if (tbl.closest(".table-wrap, .sw-grid-wrap")) return;
      const wrap = document.createElement("div");
      wrap.className = "table-wrap";
      if (tbl.parentNode) {
        tbl.parentNode.insertBefore(wrap, tbl);
        wrap.appendChild(tbl);
      }
    });
  }

  function initMol3dMobileTouchGuard() {
    const vp = document.getElementById("v20Mol3dViewport");
    if (!vp || document.getElementById("mol3dTouchGuardBtn")) return;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.id = "mol3dTouchGuardBtn";
    btn.className = "mol3d-touch-guard-btn";
    btn.textContent = "👆 Tap to Rotate 3D · Swipe Page Freely";
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      const active = vp.classList.toggle("touch-interactive");
      btn.textContent = active ? "✓ Lock 3D (Scroll Page)" : "👆 Tap to Rotate 3D · Swipe Page Freely";
    });
    vp.appendChild(btn);
  }

  function bindVisualViewportHeight() {
    if (!window.visualViewport) return;
    function syncVv() {
      const h = Math.max(240, Math.floor(window.visualViewport.height - 16));
      document.documentElement.style.setProperty("--ocq-vvh", h + "px");
    }
    window.visualViewport.addEventListener("resize", syncVv);
    window.visualViewport.addEventListener("scroll", syncVv);
    syncVv();
  }

  /* ------------------------------------------------------------------------
     6. URL Deep-Link Router (?mol=4o8h, ?doc=v4_7..., ?rule=G136)
     ------------------------------------------------------------------------ */
  function handleDeepLinkParams() {
    let params;
    try {
      params = new URLSearchParams(window.location.search || "");
    } catch (_e) {
      return;
    }
    const mol = params.get("mol");
    const doc = params.get("doc");
    const rule = params.get("rule");
    if (mol && isIndexPage()) {
      setTimeout(function () { window.openMol3dTheater(mol); }, 180);
    } else if (doc && isIndexPage()) {
      setTimeout(function () { window.openPaperInReader(doc); }, 180);
    } else if (rule && isHarnessPage()) {
      setTimeout(function () {
        if (typeof window.jumpToHarnessRule === "function") {
          window.jumpToHarnessRule(rule.toUpperCase());
        }
      }, 260);
    }
  }

  /* ------------------------------------------------------------------------
     7. Boot Sequence
     ------------------------------------------------------------------------ */
  function bootLuxuryUX() {
    initScrollProgress();
    upgradeMobileNavAcrossAllPages();
    upgradeUnwrappedTablesAndGrids();
    initHeroQuantumCanvas();
    hydrateMol3dButtons();
    initMol3dMobileTouchGuard();
    bindVisualViewportHeight();
    const molInput = document.getElementById("mol3dSearchInput");
    if (molInput) {
      molInput.addEventListener("input", applyMol3dDockFilter);
      applyMol3dDockFilter();
    }
    bindGlobalSpotlightShortcuts();
    injectFloatingCmdPillIfNeeded();
    handleDeepLinkParams();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootLuxuryUX);
  } else {
    bootLuxuryUX();
  }
})();
