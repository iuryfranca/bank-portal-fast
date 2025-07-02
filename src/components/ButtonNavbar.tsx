import { Button } from '@/components/ui/button';

interface ButtonNavbarProps {
  href: string;
  children: React.ReactNode;
}

export default function ButtonNavbar({ href, children }: ButtonNavbarProps) {
  return (
    <a href={href}>
      <Button className="">{children}</Button>
    </a>
  );
}
