angular.module('adsApp', [])
	.controller('AdsController', ['$scope', '$timeout', function ($scope, $timeout) {
		var ads = this;
		ads.jsons = {};
		ads.jsons.original = JSON.parse('[{"tipo":"estadual","media":453.82},{"tipo":"estadual","media":483.34},{"tipo":"estadual","media":456.56},{"tipo":"estadual","media":464.15},{"tipo":"estadual","media":459.60},{"tipo":"estadual","media":461.59},{"tipo":"estadual","media":461.38},{"tipo":"estadual","media":479.48},{"tipo":"estadual","media":487.20},{"tipo":"estadual","media":462.09},{"tipo":"estadual","media":509.73},{"tipo":"estadual","media":450.09},{"tipo":"estadual","media":525.71},{"tipo":"estadual","media":451.73},{"tipo":"estadual","media":461.02},{"tipo":"estadual","media":467.83},{"tipo":"estadual","media":481.68},{"tipo":"estadual","media":443.99},{"tipo":"estadual","media":461.24},{"tipo":"estadual","media":470.13},{"tipo":"estadual","media":442.10},{"tipo":"estadual","media":474.23},{"tipo":"estadual","media":457.80},{"tipo":"estadual","media":477.53},{"tipo":"estadual","media":475.48},{"tipo":"estadual","media":491.41},{"tipo":"estadual","media":458.23},{"tipo":"estadual","media":457.13},{"tipo":"estadual","media":464.51},{"tipo":"estadual","media":477.04},{"tipo":"estadual","media":464.51},{"tipo":"estadual","media":445.55},{"tipo":"estadual","media":505.57},{"tipo":"estadual","media":444.47},{"tipo":"estadual","media":459.71},{"tipo":"estadual","media":508.03},{"tipo":"estadual","media":477.10},{"tipo":"estadual","media":459.39},{"tipo":"estadual","media":467.07},{"tipo":"estadual","media":480.54},{"tipo":"estadual","media":457.88},{"tipo":"estadual","media":468.89},{"tipo":"estadual","media":432.05},{"tipo":"estadual","media":465.14},{"tipo":"estadual","media":547.79},{"tipo":"estadual","media":494.44},{"tipo":"estadual","media":465.10},{"tipo":"estadual","media":491.12},{"tipo":"estadual","media":455.02},{"tipo":"estadual","media":457.42},{"tipo":"estadual","media":452.63},{"tipo":"estadual","media":456.52},{"tipo":"estadual","media":482.54},{"tipo":"estadual","media":439.82},{"tipo":"estadual","media":471.90},{"tipo":"estadual","media":517.63},{"tipo":"estadual","media":447.75},{"tipo":"estadual","media":434.87},{"tipo":"estadual","media":475.84},{"tipo":"estadual","media":461.08},{"tipo":"estadual","media":449.27},{"tipo":"estadual","media":714.37},{"tipo":"estadual","media":486.45},{"tipo":"estadual","media":430.76},{"tipo":"estadual","media":491.86},{"tipo":"estadual","media":474.03},{"tipo":"estadual","media":441.76},{"tipo":"estadual","media":445.99},{"tipo":"estadual","media":449.94},{"tipo":"estadual","media":468.66},{"tipo":"estadual","media":447.82},{"tipo":"estadual","media":438.25},{"tipo":"estadual","media":458.32},{"tipo":"estadual","media":475.23},{"tipo":"estadual","media":453.63},{"tipo":"estadual","media":440.01},{"tipo":"estadual","media":497.71},{"tipo":"estadual","media":465.33},{"tipo":"estadual","media":451.81},{"tipo":"estadual","media":476.45},{"tipo":"estadual","media":470.17},{"tipo":"estadual","media":449.29},{"tipo":"estadual","media":455.70},{"tipo":"estadual","media":461.59},{"tipo":"estadual","media":435.82},{"tipo":"particular","media":475.27},{"tipo":"particular","media":547.21},{"tipo":"particular","media":597.01},{"tipo":"particular","media":588.97},{"tipo":"particular","media":565.79},{"tipo":"particular","media":542.27},{"tipo":"particular","media":554.80},{"tipo":"particular","media":533.29},{"tipo":"particular","media":526.20},{"tipo":"particular","media":546.78},{"tipo":"particular","media":491.53},{"tipo":"particular","media":603.91},{"tipo":"particular","media":520.71},{"tipo":"particular","media":639.97},{"tipo":"particular","media":540.36},{"tipo":"particular","media":551.60},{"tipo":"particular","media":610.40},{"tipo":"particular","media":534.47},{"tipo":"particular","media":519.55},{"tipo":"particular","media":500.60},{"tipo":"particular","media":652.02},{"tipo":"particular","media":493.72},{"tipo":"particular","media":570.11},{"tipo":"particular","media":619.04},{"tipo":"particular","media":683.11},{"tipo":"particular","media":671.14},{"tipo":"particular","media":583.34},{"tipo":"particular","media":592.17},{"tipo":"particular","media":585.39},{"tipo":"particular","media":586.26},{"tipo":"particular","media":565.80},{"tipo":"particular","media":613.77},{"tipo":"particular","media":533.75},{"tipo":"particular","media":621.62},{"tipo":"particular","media":602.62},{"tipo":"particular","media":541.82},{"tipo":"particular","media":583.21},{"tipo":"particular","media":639.87},{"tipo":"particular","media":508.61},{"tipo":"particular","media":500.17},{"tipo":"particular","media":527.81},{"tipo":"particular","media":579.28},{"tipo":"particular","media":584.87},{"tipo":"particular","media":503.29},{"tipo":"particular","media":569.58},{"tipo":"particular","media":574.21},{"tipo":"particular","media":583.96},{"tipo":"particular","media":577.38},{"tipo":"particular","media":525.94},{"tipo":"particular","media":499.05},{"tipo":"particular","media":565.55},{"tipo":"particular","media":522.68},{"tipo":"particular","media":476.87},{"tipo":"particular","media":586.95},{"tipo":"particular","media":643.03},{"tipo":"particular","media":625.75},{"tipo":"particular","media":525.08},{"tipo":"particular","media":464.31},{"tipo":"particular","media":619.29},{"tipo":"particular","media":541.96},{"tipo":"particular","media":588.61},{"tipo":"particular","media":535.51},{"tipo":"particular","media":525.80},{"tipo":"particular","media":529.79},{"tipo":"particular","media":694.83},{"tipo":"particular","media":647.63},{"tipo":"particular","media":489.62},{"tipo":"particular","media":544.04},{"tipo":"particular","media":610.07},{"tipo":"particular","media":554.94},{"tipo":"particular","media":537.35},{"tipo":"particular","media":739.55},{"tipo":"particular","media":551.52},{"tipo":"particular","media":592.27},{"tipo":"particular","media":520.03},{"tipo":"particular","media":510.04},{"tipo":"particular","media":669.74},{"tipo":"particular","media":648.94},{"tipo":"particular","media":687.92},{"tipo":"particular","media":510.78},{"tipo":"particular","media":523.27},{"tipo":"particular","media":531.87},{"tipo":"particular","media":598.60},{"tipo":"particular","media":567.38},{"tipo":"particular","media":538.86},{"tipo":"particular","media":550.93},{"tipo":"particular","media":608.42},{"tipo":"particular","media":601.60},{"tipo":"particular","media":636.11},{"tipo":"particular","media":504.80},{"tipo":"particular","media":678.48}]');
		ads.jsons.modified = {};
		ads.metrics = {original: { total: {}, particular:{}, estadual: {} }, modified : { total: {}, particular:{}, estadual: {} } };
		ads.percentual = {};
		ads.school_types = ["estadual", "particular"];

		ads.calcAvg = function (json) {
			var sum = 0;
			angular.forEach (json, function (item, key) {
				sum = sum + item.media;
			});
			return sum / json.length;
		}
		
		ads.calcVariance = function (json, avg) {
			var sum_sqr = 0;
			angular.forEach(json, function (item) {
				var diff = item.media - avg;
				sum_sqr = sum_sqr + (diff * diff);
			});

			return sum_sqr / json.length;
		}

		ads.calcStdDev = function (variance) {
			return Math.sqrt(variance);
		}

		ads.getMin = function (json) {
			var min = null;
			angular.forEach (json, function (item, key) {
				if (min === null) {
					min = item.media;
				} else {
					min = Math.min(min, item.media);
				}
			});
			return min;
		}

		ads.getMax = function (json) {
			var max = null;
			angular.forEach (json, function (item, key) {
				if (max === null) {
					max = item.media;
				} else {
					max = Math.max(max, item.media);
				}
			});
			return max;
		}


		ads.fetchByType = function (json, type) {
			if (json.length > 0) {
				return json.filter(function (item) {
					return item.tipo == type;
				});
			}
			return json;
		}

		ads.calcMetrics = function (json) {
			var metrics = {
				avg: ads.calcAvg(json),
				min: ads.getMin(json),
				max: ads.getMax(json),
			}

			metrics.variance = ads.calcVariance(json, metrics.avg);
			metrics.std_dev = ads.calcStdDev(metrics.variance);
			return metrics;
		}

		ads.modifyJSON = function (percentual_particular) {
			var new_total_particular = Math.round(ads.jsons.original.length * (percentual_particular/100));
			var diff = new_total_particular - ads.jsons.particular.length;
			console.log(ads.jsons.particular.length, new_total_particular, diff);
			if (diff > 0) {
				//converter para particular
			} else {
				//converter para estadual
			}
		}

		ads.run = function () {
			ads.modifyJSON(ads.percentual.particular);

			ads.metrics.modified.total = ads.calcMetrics(ads.jsons.modified);
			var modified_types_json = {};
			angular.forEach (ads.school_types, function (type) {
				modified_types_json[type] = ads.fetchByType(ads.jsons.modified, type);
				ads.metrics.modified[type] = ads.calcMetrics(modified_types_json[type]);
			});	
		}


		ads.metrics.original.total = ads.calcMetrics(ads.jsons.original);
		angular.forEach (ads.school_types, function (type) {
			ads.jsons[type] = ads.fetchByType(ads.jsons.original, type);
			ads.metrics.original[type] = ads.calcMetrics(ads.jsons[type]);
			ads.percentual[type] = parseFloat((ads.jsons[type].length / ads.jsons.original.length * 100).toFixed(3));
		});
		
		

	}]);