
module.exports = {
	_loggedin: false,
	tag: '',
	setUp: function () {
		cordova.exec(
		function (result) {
			if (self.onSetupSucceeded)
				self.onSetupSucceeded();
		}, 
		function (error) {
			if (self.onSetupFailed)			
				self.onSetupFailed(error);
		}, "Game", "setUp", []);
    },
	login: function (tag) {
		var self = this;
		cordova.exec(function (result) {
			var playerDetail = result;
			self._loggedin = true;
			self.tag = tag;			
			if (self.onLoginSucceeded)
				self.onLoginSucceeded(playerDetail);
		}, 
		function (error) {
			self.tag = tag;		
			if (self.onLoginFailed)			
				self.onLoginFailed(error);
		}, "Game", "login", []);
    },
	logout: function () {
		var self = this;
		cordova.exec(function (result) {
			self._loggedin = false;
			if (self.onLogoutSucceeded)
				self.onLogoutSucceeded();
		}, 
		function (error) {
			if (self.onLogoutFailed)
				self.onLogoutFailed(error);
		}, "Game", "logout", []);
    },
	isLoggedIn: function () {
		return this._loggedin;
	},
	getPlayerImage: function () {
		var self = this;
		cordova.exec(function (result) {
			var playerImageUrl = result;
			if (self.onGetPlayerImageSucceeded)			
				self.onGetPlayerImageSucceeded(playerImageUrl);
		}, 
		function (error) {
			if (self.onGetPlayerImageFailed)			
				self.onGetPlayerImageFailed(error);
		}, "Game", "getPlayerImage", []);
	},	
	getPlayerScore: function (leaderboardId, tag) {
		var self = this;
		cordova.exec(function (result) {
			var playerScore = result;
			self.tag = tag;
			if (self.onGetPlayerScoreSucceeded)
				self.onGetPlayerScoreSucceeded(playerScore);
		}, 
		function (error) {
			self.tag = tag;
			if (self.onGetPlayerScoreFailed)			
				self.onGetPlayerScoreFailed(error);
		}, "Game", "getPlayerScore", [leaderboardId]);
	},
	submitScore: function (leaderboardId, score, tag) {
		var self = this;
		cordova.exec(function (result) {
			self.tag = tag;
			if (self.onSubmitScoreSucceeded)			
				self.onSubmitScoreSucceeded();
		}, 
		function (error) {
			self.tag = tag;
			if (self.onSubmitScoreFailed)			
				self.onSubmitScoreFailed(error);
		}, "Game", "submitScore", [leaderboardId, score]);
	},
	showLeaderboard: function (leaderboardId) {
		cordova.exec(
		function (result) {
			if (self.onShowLeaderboardSucceeded)			
				self.onShowLeaderboardSucceeded();
		}, 
		function (error) {
			if (self.onShowLeaderboardFailed)			
				self.onShowLeaderboardFailed(error);
		}, "Game", "showLeaderboard", [leaderboardId]);
	},
	unlockAchievement: function (achievementId, tag) {
		var self = this;
		cordova.exec(function (result) {
			self.tag = tag;
			if (self.onUnlockAchievementSucceeded)			
				self.onUnlockAchievementSucceeded();
		}, 
		function (error) {
			self.tag = tag;
			if (self.onUnlockAchievementFailed)			
				self.onUnlockAchievementFailed(error);
		}, "Game", "unlockAchievement", [achievementId]);
	},
	incrementAchievement: function (achievementId, incrementalStepOrCurrentPercent, tag) {
		var self = this;
		cordova.exec(function (result) {
			self.tag = tag;
			if (self.onIncrementAchievementSucceeded)			
				self.onIncrementAchievementSucceeded();
		}, 
		function (error) {
			self.tag = tag;
			if (self.onIncrementAchievementFailed)			
				self.onIncrementAchievementFailed(error);
		}, "Game", "incrementAchievement", [achievementId, incrementalStepOrCurrentPercent]);
	},	
	showAchievements: function () {
		cordova.exec(
		function (result) {
			if (self.onShowAchievementsSucceeded)			
				self.onShowAchievementsSucceeded();
		}, 
		function (error) {
			if (self.onShowAchievementsFailed)			
				self.onShowAchievementsFailed(error);
		}, "Game", "showAchievements", []);
	},
	resetAchievements: function () {
		var self = this;
		cordova.exec(function (result) {
			if (self.onResetAchievementsSucceeded)			
				self.onResetAchievementsSucceeded();
		}, 
		function (error) {
			if (self.onResetAchievementsFailed)			
				self.onResetAchievementsFailed(error);
		}, "Game", "resetAchievements", []);
	},
	onSetupSucceeded: null,
	onSetupFailed: null,
	onLoginSucceeded: null,
	onLoginFailed: null,	
	onLogoutSucceeded: null,
	onLogoutFailed: null,	
	onGetPlayerImageSucceeded: null,
	onGetPlayerImageFailed: null,	
	onGetPlayerScoreSucceeded: null,
	onGetPlayerScoreFailed: null,	
	onSubmitScoreSucceeded: null,
	onSubmitScoreFailed: null,
	onShowLeaderboardSucceeded: null,
	onShowLeaderboardFailed: null,
	onUnlockAchievementSucceeded: null,
	onUnlockAchievementFailed: null,
	onIncrementAchievementSucceeded: null,
	onIncrementAchievementFailed: null,
	onShowAchievementsSucceeded: null,
	onShowAchievementsFailed: null,
	onResetAchievementsSucceeded: null,
	onResetAchievementsFailed: null
};
