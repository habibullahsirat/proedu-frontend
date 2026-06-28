export default function Footer() {
  return (
    <footer className="bg-[#161616] py-16 text-white">
      <div className="mx-auto max-w-[1720px] px-4">
        <div className="space-y-6 text-center">
          <h2 className="text-4xl font-bold">Pro Edu</h2>

          <p className="mx-auto max-w-xl text-gray-300">
            Office 41, Zawaya Building, Ghala Muscat, Sultanate of Oman
          </p>

          <div className="flex justify-center gap-4">
            {["F", "TW", "IN", "TK"].map((icon) => (
              <div
                key={icon}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#242424] transition hover:bg-[#289BDE]"
              >
                {icon}
              </div>
            ))}
          </div>

          <p className="text-gray-400">Privacy Policy • Terms of Use</p>
        </div>
      </div>
    </footer>
  );
}
