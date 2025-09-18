// resources/js/hooks/use-initials.ts
export function useInitials() {
  return (name: string): string => {
    if (!name) return "";

    const parts = name.trim().split(" ");
    if (parts.length === 1) {
      return parts[0][0]?.toUpperCase() ?? "";
    }

    return (
      (parts[0][0] ?? "") +
      (parts[parts.length - 1][0] ?? "")
    ).toUpperCase();
  };
}
