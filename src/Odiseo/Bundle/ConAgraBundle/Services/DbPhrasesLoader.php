<?php

namespace Odiseo\Bundle\ConAgraBundle\Services;
use Symfony\Component\Translation\Loader\LoaderInterface;
use Doctrine\ORM\EntityManager;
use Odiseo\Bundle\ConAgraBundle\Repository\LanguageTranslationRepository;
use Odiseo\Bundle\ConAgraBundle\Repository\LanguageRepository;
use Symfony\Component\Translation\MessageCatalogue;
class DbPhrasesLoader implements LoaderInterface{
	
	private $translationRepository;
	private $languageRepository;
	
	/**
	 * @param EntityManager $entityManager
	 */
	public function __construct(EntityManager $entityManager)
	{
		$this->translationRepository = $entityManager->getRepository("OdiseoConAgraBundle:LanguageTranslation");
		$this->languageRepository = $entityManager->getRepository("OdiseoConAgraBundle:Language");
	}
	
	function load($resource, $locale, $domain = 'messages')
	{
		//Load on the db for the specified local
		$language = $this->languageRepository->findOneByLocale($locale);
		$translations = $this->translationRepository->getTranslations($language, $domain);
		$catalogue = new MessageCatalogue($locale);
	
		foreach($translations as $translation)
		{
			$catalogue->set($translation->getLanguageToken()->getToken(), $translation->getTranslation(), $domain);
		}
		return $catalogue;
	}
	
	
}