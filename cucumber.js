module.exports = {
  default: {
	require: ['tests/steps/**/*.ts'], // Ścieżka do plików z krokami
	format: ['html:reports/cucumber-report.html'], // Format raportu
	paths: ['tests/features/**/*.feature'], // Ścieżka do plików feature
	publishQuiet: true,
  },
};