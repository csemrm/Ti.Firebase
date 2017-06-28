/**
 * Hyperloop configuration
 */
module.exports = {
	type: 'app',
	group: 'titanium',
	hyperloop: {
		ios: {
			thirdparty: {
				'MyFramework': {
					source: ['src'],
					header: 'src',
					resource: 'src'
				}
			}
		}
	}
};
