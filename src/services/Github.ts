import axios from "axios";

export class Github {
  private static readonly auth = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;

  static raw = axios.create({
    baseURL: "https://raw.githubusercontent.com"
  });

  static api = axios.create({
    baseURL: "https://api.github.com",
    headers: {
      "Authorization": "Bearer  " + this.auth
    }
  });

  static async getReadme(locale: string, repo = "l-marcel/next-l-marcel") {
    return await this.raw
      .get(`${repo}/main/README${locale === "en-us"? ".en-US":""}.md`)
      .then(res => res.data)
      .catch(async() => {
        return await this.raw
          .get(`l-marcel/next-l-marcel/main/README_ERROR${locale === "en-us"? ".en-US":""}.md`)
          .then(res => res.data);
      });
  }
}