import { redirect } from "next/navigation";

// Fusion Communications: no public marketing page. The home address goes
// straight to sign-in; the login page forwards signed-in users to the inbox
// and sends a brand-new install to /setup.
export const dynamic = "force-dynamic";

export default function HomePage() {
  redirect("/login");
}
