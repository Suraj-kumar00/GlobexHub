export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex h-16 items-center px-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Travel Companion. All rights reserved.
        </p>
      </div>
    </footer>
  );
}