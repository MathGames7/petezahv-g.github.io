let conf;

function initRemoteConfig() {
	const remoteConfig = firebase.remoteConfig();
	remoteConfig.settings.minimumFetchIntervalMillis = 2000;
	setDefaultValues(remoteConfig);

	remoteConfig
		.fetchAndActivate()
		.then(() => {
			conf = {};
			// Convert all of the remote config parameters to a dict:
			for (const [key, value] of Object.entries(remoteConfig.getAll())) {
				conf[key] = value.asString();
			}
		})
		.catch((err) => {
			console.warn("config error: " + err);
		});
}

async function sendConfig() {
	while (conf === undefined) {
		await sleep(2000);
	}

	window.unityInstance.SendMessage(
		"MainMenuManagers",
		"ActivateRemoteConfig",
		JSON.stringify(conf),
	);
}

function setDefaultValues(remoteConfig) {
	remoteConfig.defaultConfig = {
		SettingsV5: JSON.stringify({
			id: "default",
			skins_data: {
				"lol.1v1.playerskins.pack.1": {
					Name: "Agent Olivia",
					PriceText: "100",
					Currency: "LC",
					Rarity: "Rare",
					Prices: { LC: 100, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.2": {
					Name: "S.W.A.T",
					PriceText: "400",
					Currency: "LC",
					Rarity: "Epic",
					Prices: { LC: 400, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.3": {
					Name: "X-Bot",
					PriceText: "900",
					Currency: "LC",
					Rarity: "Legendary",
					Prices: { LC: 900, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.4": {
					Name: "Skater Boy",
					PriceText: "100",
					Currency: "LC",
					Rarity: "Epic",
					Prices: { LC: 100, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.5": {
					Name: "Lola",
					PriceText: "400",
					Currency: "LC",
					Rarity: "Epic",
					Prices: { LC: 400, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.6": {
					Name: "Ninja",
					PriceText: "900",
					Currency: "LC",
					Rarity: "Legendary",
					Prices: { LC: 900, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.7": {
					Name: "Caty",
					PriceText: "100",
					Currency: "LC",
					Rarity: "Rare",
					Prices: { LC: 100, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.8": {
					Name: "Beach Girl",
					PriceText: "400",
					Currency: "LC",
					Rarity: "Epic",
					Prices: { LC: 400, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.9": {
					Name: "LOL Pump",
					PriceText: "900",
					Currency: "LC",
					Rarity: "Legendary",
					Prices: { LC: 900, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.10": {
					Name: "Rey",
					PriceText: "100",
					Currency: "LC",
					Rarity: "Rare",
					Prices: { LC: 100, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.11": {
					Name: "Justin",
					PriceText: "400",
					Currency: "LC",
					Rarity: "Epic",
					Prices: { LC: 400, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.12": {
					Name: "Hot Dog",
					PriceText: "900",
					Currency: "LC",
					Rarity: "Legendary",
					Prices: { LC: 900, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.17": {
					Name: "John",
					PriceText: "100",
					Currency: "LC",
					Rarity: "Rare",
					Prices: { LC: 100, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.18": {
					Name: "Hilda",
					PriceText: "100",
					Currency: "LC",
					Rarity: "Rare",
					Prices: { LC: 100, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.19": {
					Name: "Jester",
					PriceText: "900",
					Currency: "LC",
					Rarity: "Legendary",
					Prices: { LC: 900, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.20": {
					Name: "Executioner",
					PriceText: "400",
					Currency: "LC",
					Rarity: "Epic",
					Prices: { LC: 400, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.21": {
					Name: "Astrid",
					PriceText: "400",
					Currency: "LC",
					Rarity: "Epic",
					Prices: { LC: 400, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.22": {
					Name: "Olaf",
					PriceText: "400",
					Currency: "LC",
					Rarity: "Epic",
					Prices: { LC: 400, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.23": {
					Name: "Dre",
					PriceText: "400",
					Currency: "LC",
					Rarity: "Epic",
					Prices: { LC: 400, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.24": {
					Name: "Sonya",
					PriceText: "100",
					Currency: "LC",
					Rarity: "Rare",
					Prices: { LC: 100, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.25": {
					Name: "Jessica",
					PriceText: "400",
					Currency: "LC",
					Rarity: "Epic",
					Prices: { LC: 400, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.26": {
					Name: "Scarecrow",
					PriceText: "900",
					Currency: "LC",
					Rarity: "Legendary",
					Prices: { LC: 900, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.27": {
					Name: "Brandy",
					PriceText: "400",
					Currency: "LC",
					Rarity: "Epic",
					Prices: { LC: 400, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.tier.RV0": {
					Name: "Paper Bag Mask",
					PriceText: "50",
					Currency: "RV",
					Rarity: "Uncommon",
					Prices: { LC: 50, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.tier.RV1": {
					Name: "Hockey Mask",
					PriceText: "50",
					Currency: "RV",
					Rarity: "Uncommon",
					Prices: { LC: 50, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.tier.RV2": {
					Name: "Mysterio",
					PriceText: "50",
					Currency: "RV",
					Rarity: "Uncommon",
					Prices: { LC: 50, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.tier.RV3": {
					Name: "Cube Face",
					PriceText: "50",
					Currency: "RV",
					Rarity: "Uncommon",
					Prices: { LC: 50, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.tier.RV4": {
					Name: "Uncle Sam",
					PriceText: "50",
					Currency: "RV",
					Rarity: "Uncommon",
					Prices: { LC: 50, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.tier.RV5": {
					Name: "Alien",
					PriceText: "50",
					Currency: "RV",
					Rarity: "Uncommon",
					Prices: { LC: 50, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.tier.RV6": {
					Name: "Stranger",
					PriceText: "50",
					Currency: "RV",
					Rarity: "Uncommon",
					Prices: { LC: 50, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.tier.RV7": {
					Name: "Football",
					PriceText: "50",
					Currency: "RV",
					Rarity: "Uncommon",
					Prices: { LC: 50, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.tier.RV8": {
					Name: "Party Hat",
					PriceText: "50",
					Currency: "RV",
					Rarity: "Uncommon",
					Prices: { LC: 50, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.tier.RV9": {
					Name: "Pot",
					PriceText: "50",
					Currency: "RV",
					Rarity: "Uncommon",
					Prices: { LC: 50, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.tier.RV10": {
					Name: "Skull Mask",
					PriceText: "50",
					Currency: "RV",
					Rarity: "Uncommon",
					Prices: { LC: 50, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.tier.RV11": {
					Name: "Karate",
					PriceText: "50",
					Currency: "RV",
					Rarity: "Uncommon",
					Prices: { LC: 50, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.tier.RV12": {
					Name: "Ice Cream",
					PriceText: "50",
					Currency: "RV",
					Rarity: "Uncommon",
					Prices: { LC: 50, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.tier.RV13": {
					Name: "#1 Hat",
					PriceText: "50",
					Currency: "RV",
					Rarity: "Uncommon",
					Prices: { LC: 50, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.tier.RV14": {
					Name: "Fish Bait",
					PriceText: "50",
					Currency: "RV",
					Rarity: "Uncommon",
					Prices: { LC: 50, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.tier.RV15": {
					Name: "Spartan",
					PriceText: "50",
					Currency: "RV",
					Rarity: "Uncommon",
					Prices: { LC: 50, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.tier.RV16": {
					Name: "Safety First!",
					PriceText: "50",
					Currency: "RV",
					Rarity: "Uncommon",
					Prices: { LC: 50, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.tier.RV17": {
					Name: "Squid Kid",
					PriceText: "50",
					Currency: "RV",
					Rarity: "Uncommon",
					Prices: { LC: 50, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.tier.RV18": {
					Name: "Cupcake",
					PriceText: "50",
					Currency: "RV",
					Rarity: "Uncommon",
					Prices: { LC: 50, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.tier.RV19": {
					Name: "Gas Mask",
					PriceText: "50",
					Currency: "RV",
					Rarity: "Uncommon",
					Prices: { LC: 50, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.tier.RV20": {
					Name: "Disco Star",
					PriceText: "50",
					Currency: "RV",
					Rarity: "Uncommon",
					Prices: { LC: 50, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.tier.RV21": {
					Name: "Goth Girl",
					PriceText: "50",
					Currency: "RV",
					Rarity: "Uncommon",
					Prices: { LC: 50, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.tier.RV22": {
					Name: "Ser 1v1alot",
					PriceText: "50",
					Currency: "RV",
					Rarity: "Uncommon",
					Prices: { LC: 50, RM: 0.99, RV: 4 },
				},
				"lol.1v1.playerskins.pack.tier.RV23": {
					Name: "Fiesta Time",
					PriceText: "50",
					Currency: "RV",
					Rarity: "Uncommon",
					Prices: { LC: 50, RM: 0.99, RV: 4 },
				},
			},
			coins_data: {
				"lol.1v1.coins.pack.1": {
					DisplayText: "100",
					Amount: 100,
					Price: 0.99,
				},
				"lol.1v1.coins.pack.2": {
					DisplayText: "420",
					Amount: 420,
					Price: 3.99,
				},
				"lol.1v1.coins.pack.3": {
					DisplayText: "770",
					Amount: 770,
					Price: 6.99,
				},
				"lol.1v1.coins.pack.4": {
					DisplayText: "1150",
					Amount: 1150,
					Price: 9.99,
				},
				"lol.1v1.coins.pack.5": {
					DisplayText: "2400",
					Amount: 2400,
					Price: 19.99,
				},
				"lol.1v1.coins.pack.6": {
					DisplayText: "6500",
					Amount: 6500,
					Price: 49.99,
				},
			},
			rv_skins: [
				"lol.1v1.playerskins.pack.tier.RV11",
				"lol.1v1.playerskins.pack.tier.RV12",
				"lol.1v1.playerskins.pack.tier.RV13",
				"lol.1v1.playerskins.pack.tier.RV14",
				"lol.1v1.playerskins.pack.tier.RV15",
				"lol.1v1.playerskins.pack.tier.RV16",
				"lol.1v1.playerskins.pack.tier.RV17",
				"lol.1v1.playerskins.pack.tier.RV18",
				"lol.1v1.playerskins.pack.tier.RV19",
				"lol.1v1.playerskins.pack.tier.RV20",
				"lol.1v1.playerskins.pack.tier.RV21",
				"lol.1v1.playerskins.pack.tier.RV22",
				"lol.1v1.playerskins.pack.tier.RV23",
				"lol.1v1.playerskins.pack.tier.RV10",
				"lol.1v1.playerskins.pack.tier.RV0",
				"lol.1v1.playerskins.pack.tier.RV5",
				"lol.1v1.playerskins.pack.tier.RV6",
				"lol.1v1.playerskins.pack.tier.RV9",
				"lol.1v1.playerskins.pack.tier.RV8",
				"lol.1v1.playerskins.pack.tier.RV2",
				"lol.1v1.playerskins.pack.tier.RV1",
				"lol.1v1.playerskins.pack.tier.RV3",
				"lol.1v1.playerskins.pack.tier.RV7",
			],
			player_skins_store: [
				[
					"lol.1v1.playerskins.pack.23",
					"lol.1v1.playerskins.pack.25",
					"lol.1v1.playerskins.pack.1",
					"lol.1v1.playerskins.pack.7",
					"lol.1v1.playerskins.pack.10",
					"lol.1v1.playerskins.pack.21",
					"lol.1v1.playerskins.pack.22",
					"lol.1v1.playerskins.pack.4",
					"lol.1v1.playerskins.pack.2",
					"lol.1v1.playerskins.pack.5",
					"lol.1v1.playerskins.pack.8",
					"lol.1v1.playerskins.pack.11",
					"lol.1v1.playerskins.pack.3",
					"lol.1v1.playerskins.pack.6",
					"lol.1v1.playerskins.pack.9",
					"lol.1v1.playerskins.pack.12",
				],
			],
			links_data: {
				Discord: { link: "https://discord.gg/1v1" },
				Instagram: { link: "https://www.instagram.com/1v1.lol" },
				TikTok: { link: "https://www.tiktok.com/@1v1_lol" },
			},
			percent_protection: 30,
			competitive_modes: [["1v1_Competitive", "Teams_2v2_Competitive"]],
			casual_modes: [
				["1v1", "BoxFight_Teams_2v2", "PipeRun_Race", "Teams_City_ZoneWars"],
			],
			practice_modes: ["Practice", "AimTrainer", "Zombies", "PipeRun"],
			custom_modes: [
				[
					"1v1_Custom",
					"Deathmatch_Custom",
					"MiniBoxFight_Custom",
					"BoxFight_Custom",
					"Zone_Custom",
					"Vikings_Custom",
					"PipeRun_Custom",
					"City_ZoneWars_Custom",
				],
			],
			modes_rotation_hour: 17,
			skins_rotation_hour: 14,
			modes_info: {
				"1v1": { OverridenRangeIncreaseFactor: 12000 },
				"1v1_Competitive": { OverridenRangeIncreaseFactor: 12000 },
				BattleRoyale: { OverridenRangeIncreaseFactor: 12000 },
				BoxFight_Teams_2v2: { OverridenRangeIncreaseFactor: 24000 },
				Vikings_Teams_3v3: { OverridenRangeIncreaseFactor: 12000 },
				BattleRoyale_Teams_2v2: { OverridenRangeIncreaseFactor: 12000 },
				Teams_2v2: { OverridenRangeIncreaseFactor: 12000 },
				BattleRoyale_ZoneWars: { OverridenRangeIncreaseFactor: 24000 },
				BoxFight_1v1: { OverridenRangeIncreaseFactor: 12000 },
				BoxFight_1v1_Competitive: { OverridenRangeIncreaseFactor: 24000 },
			},
			mobile_settings: { ShowPushNotifications: true },
			ads_settings: {
				ShowAdChance: 1,
				MinAdIntervalInSeconds: 60,
				RvAdIntervalInMinutes: 1440,
				RvAdsNeededToUnlock: 4,
			},
			store_settings: { NewItemsShine: true },
		}),
		BattlePassId: "default",
		BattlePass: JSON.stringify({
			current_season: 1,
			start_date: "2021-08-20T12:30:00.000+03:00",
			battle_passes: {
				default: {
					win_xp: 50,
					lose_xp: 25,
					premium_price: 1000,
					tier_up_price: 100,
					tiers: [
						{
							xp: 0,
							free_rewards: ["lol.1v1.playerskins.pack.tier.RV0"],
							premium_rewards: ["lol.1v1.coins.pack.2"],
						},
					],
				},
			},
		}),
	};
}

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
