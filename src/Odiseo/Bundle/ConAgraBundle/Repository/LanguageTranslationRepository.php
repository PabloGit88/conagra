<?php

namespace Odiseo\Bundle\ConAgraBundle\Repository;

use Doctrine\ORM\EntityRepository;

class LanguageTranslationRepository extends EntityRepository {

	/**
	 * Return all translations for specified token
	 * @param type $token
	 * @param type $domain
	 */
	public function getTranslations($language, $catalogue = "messages")
	{
		$query = $this->getEntityManager()->createQuery("SELECT t FROM OdiseoConAgraBundle:LanguageTranslation t WHERE t.language = :language AND t.catalogue = :catalogue");
		$query->setParameter("language", $language);
		$query->setParameter("catalogue", $catalogue);

		return $query->getResult();
	}
}