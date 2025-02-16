export default async function page({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  return <div>{token}</div>;
}
