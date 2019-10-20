import { DEFAULT_LANGUAGE } from "./constants";
import { loadLanguageAsync } from "@/config/i18n";

export const state = {
  lang: DEFAULT_LANGUAGE
};

export const getters = {
  getLang: state => {
    return state.lang;
  }
};

export const mutations = {
  SET_LANGUAGE: (state, lang) => {
    state.lang = lang;
  }
};

export const actions = {
  setLanguage: async ({ commit }, lang) => {
    try {
      await loadLanguageAsync(lang);
      commit("SET_LANGUAGE", lang);
    } catch (err) {
      try {
        await loadLanguageAsync(DEFAULT_LANGUAGE);
        commit("SET_LANGUAGE", DEFAULT_LANGUAGE);
      } catch (err) {
        throw new Error("Critical Failure - No Language Files Found");
      }
    }
  }
};
