export async function register() {
	const { registerHighlight } = await import('@highlight-run/next/server')

	registerHighlight({
		projectID: "lgx79nzd",
		serviceName: "digi-moda",
	})
}
